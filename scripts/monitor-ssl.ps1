# Cloudflare Activation Monitor
# Run this to check your SSL activation status

Write-Host ""
Write-Host "CLOUDFLARE SSL ACTIVATION MONITOR" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "CURRENT STATUS:" -ForegroundColor Yellow
Write-Host ""

# Check DNS resolution
Write-Host "1. DNS Resolution Check:" -ForegroundColor Magenta
try {
    $dnsResult = Resolve-DnsName -Name "garthpuckerin.com" -Type A -ErrorAction Stop
    $cloudflareDetected = $false
    foreach ($ip in $dnsResult) {
        if ($ip.IPAddress -like "104.21.*" -or $ip.IPAddress -like "172.67.*") {
            $cloudflareDetected = $true
            break
        }
    }
    
    if ($cloudflareDetected) {
        Write-Host "   DNS: CLOUDFLARE ACTIVE" -ForegroundColor Green
        Write-Host "   Status: Nameservers successfully updated" -ForegroundColor Green
    } else {
        Write-Host "   DNS: Still propagating..." -ForegroundColor Yellow
        Write-Host "   Status: Wait for nameserver propagation" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   DNS: Unable to resolve" -ForegroundColor Red
}

Write-Host ""

# Check HTTPS availability
Write-Host "2. HTTPS Status Check:" -ForegroundColor Magenta
try {
    $request = [System.Net.WebRequest]::Create("https://garthpuckerin.com")
    $request.Timeout = 10000
    $response = $request.GetResponse()
    $statusCode = [int]$response.StatusCode
    $response.Close()
    
    if ($statusCode -eq 200) {
        Write-Host "   HTTPS: WORKING" -ForegroundColor Green
        Write-Host "   SSL Certificate: ACTIVE" -ForegroundColor Green
    } else {
        Write-Host "   HTTPS: Response code $statusCode" -ForegroundColor Yellow
    }
} catch {
    $errorMsg = $_.Exception.Message
    if ($errorMsg -like "*SSL*" -or $errorMsg -like "*certificate*") {
        Write-Host "   HTTPS: SSL certificate not ready yet" -ForegroundColor Yellow
        Write-Host "   Status: Still activating..." -ForegroundColor Yellow
    } elseif ($errorMsg -like "*500*" -or $errorMsg -like "*Internal Server Error*") {
        Write-Host "   HTTPS: Internal Server Error (NORMAL during activation)" -ForegroundColor Yellow
        Write-Host "   Status: Cloudflare is configuring your site" -ForegroundColor Yellow
    } else {
        Write-Host "   HTTPS: $errorMsg" -ForegroundColor Red
    }
}

Write-Host ""

# Check Cloudflare edge servers
Write-Host "3. Cloudflare Edge Detection:" -ForegroundColor Magenta
try {
    $request = [System.Net.WebRequest]::Create("https://garthpuckerin.com")
    $request.Timeout = 10000
    $response = $request.GetResponse()
    $cfServer = $response.Headers["cf-ray"]
    $response.Close()
    
    if ($cfServer) {
        Write-Host "   Cloudflare: ACTIVE" -ForegroundColor Green
        Write-Host "   Edge Server: $cfServer" -ForegroundColor Green
    } else {
        Write-Host "   Cloudflare: Not detected in headers" -ForegroundColor Yellow
    }
} catch {
    Write-Host "   Cloudflare: Unable to check (normal during activation)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "TROUBLESHOOTING GUIDE:" -ForegroundColor Cyan
Write-Host "======================" -ForegroundColor Cyan
Write-Host ""

Write-Host "INTERNAL SERVER ERROR = NORMAL!" -ForegroundColor Green
Write-Host "This happens during DNS transition and SSL activation." -ForegroundColor White
Write-Host ""

Write-Host "Timeline:" -ForegroundColor Yellow
Write-Host "  0-15 min:  DNS propagation + Internal errors" -ForegroundColor White
Write-Host "  15-30 min: SSL certificate generation" -ForegroundColor White
Write-Host "  30-60 min: Full activation complete" -ForegroundColor White
Write-Host ""

Write-Host "What to expect:" -ForegroundColor Yellow
Write-Host "  1. Internal server errors (normal)" -ForegroundColor White
Write-Host "  2. Intermittent timeouts (normal)" -ForegroundColor White
Write-Host "  3. SSL warnings briefly (normal)" -ForegroundColor White
Write-Host "  4. Then everything works perfectly!" -ForegroundColor Green
Write-Host ""

Write-Host "Check progress online:" -ForegroundColor Magenta
Start-Process "https://www.whatsmydns.net/#A/garthpuckerin.com"
Start-Process "https://dnschecker.org/#A/garthpuckerin.com"

Write-Host ""
Write-Host "Re-run this script in 10 minutes to check progress!" -ForegroundColor Green
Write-Host ""