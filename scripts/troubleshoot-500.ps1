# 🔧 500 Error Troubleshoot Script - Even with SSL Working

Write-Host ""
Write-Host "500 ERROR TROUBLESHOOTING - SSL ACTIVE SCENARIO" -ForegroundColor Red
Write-Host "===============================================" -ForegroundColor Red
Write-Host ""

Write-Host "🔍 SITUATION ANALYSIS:" -ForegroundColor Yellow
Write-Host "✅ SSL Analytics show TLS v1.3 traffic working" -ForegroundColor Green
Write-Host "✅ DNS points to Cloudflare correctly" -ForegroundColor Green
Write-Host "❌ Still getting 500 Internal Server Error" -ForegroundColor Red
Write-Host ""

Write-Host "🎯 POSSIBLE CAUSES:" -ForegroundColor Cyan
Write-Host ""

Write-Host "1. CLOUDFLARE SSL MODE STILL WRONG" -ForegroundColor Magenta
Write-Host "   Check: Is SSL mode set to 'Flexible'?" -ForegroundColor White
Write-Host "   Fix: Cloudflare Dashboard > SSL/TLS > Flexible" -ForegroundColor Gray
Write-Host ""

Write-Host "2. ORIGIN RULES CONFLICT" -ForegroundColor Magenta
Write-Host "   Check: Page Rules or Origin Rules interfering" -ForegroundColor White
Write-Host "   Fix: Disable any custom rules temporarily" -ForegroundColor Gray
Write-Host ""

Write-Host "3. .HTACCESS REDIRECT LOOP" -ForegroundColor Magenta
Write-Host "   Check: HTTPS redirects causing loops" -ForegroundColor White
Write-Host "   Fix: Temporarily disable HTTPS redirect" -ForegroundColor Gray
Write-Host ""

Write-Host "4. CLOUDFLARE CACHE ISSUES" -ForegroundColor Magenta
Write-Host "   Check: Cached 500 errors being served" -ForegroundColor White
Write-Host "   Fix: Purge all cache" -ForegroundColor Gray
Write-Host ""

Write-Host "5. GODADDY FILE PERMISSIONS" -ForegroundColor Magenta
Write-Host "   Check: Incorrect file permissions on server" -ForegroundColor White
Write-Host "   Fix: Check file permissions in cPanel" -ForegroundColor Gray
Write-Host ""

Write-Host "🔧 STEP-BY-STEP FIXES:" -ForegroundColor Yellow
Write-Host ""

Write-Host "STEP 1: Verify SSL Mode" -ForegroundColor Green
Write-Host "1. Go to Cloudflare Dashboard" -ForegroundColor White
Write-Host "2. Select garthpuckerin.com" -ForegroundColor White
Write-Host "3. SSL/TLS tab > Overview" -ForegroundColor White
Write-Host "4. Confirm mode is 'Flexible'" -ForegroundColor White
Write-Host ""

Write-Host "STEP 2: Purge Cloudflare Cache" -ForegroundColor Green
Write-Host "1. Cloudflare Dashboard > Caching" -ForegroundColor White
Write-Host "2. Click 'Purge Everything'" -ForegroundColor White
Write-Host "3. Confirm purge" -ForegroundColor White
Write-Host "4. Wait 2-3 minutes" -ForegroundColor White
Write-Host ""

Write-Host "STEP 3: Test Direct Origin" -ForegroundColor Green
Write-Host "We'll check if GoDaddy server works directly..." -ForegroundColor White

# Try to get the origin IP
try {
    $dnsA = Resolve-DnsName -Name "garthpuckerin.com" -Type A | Where-Object {$_.IPAddress -notlike "104.21.*" -and $_.IPAddress -notlike "172.67.*" -and $_.IPAddress -notlike "2606:4700:*"}
    if ($dnsA) {
        $originIP = $dnsA[0].IPAddress
        Write-Host "Origin IP found: $originIP" -ForegroundColor Green
        Write-Host "Test direct access: http://$originIP" -ForegroundColor Gray
    } else {
        Write-Host "Origin IP not visible (hidden behind Cloudflare)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "Cannot determine origin IP" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "STEP 4: Temporarily Bypass Cloudflare" -ForegroundColor Green
Write-Host "1. Cloudflare Dashboard > DNS" -ForegroundColor White
Write-Host "2. Click orange cloud next to @ record" -ForegroundColor White
Write-Host "3. Make it gray (DNS only)" -ForegroundColor White
Write-Host "4. Test direct GoDaddy connection" -ForegroundColor White
Write-Host "5. Re-enable cloud (orange) after test" -ForegroundColor White
Write-Host ""

Write-Host "🎯 QUICK TESTS TO RUN:" -ForegroundColor Cyan
Write-Host ""

Write-Host "Test 1: Check SSL Mode" -ForegroundColor Magenta
Start-Process "https://dash.cloudflare.com"
Write-Host "Navigate to SSL/TLS > Overview and verify 'Flexible' mode" -ForegroundColor Gray
Write-Host ""

Write-Host "Test 2: Different URLs" -ForegroundColor Magenta
Write-Host "Try these variations:" -ForegroundColor White
Write-Host "• https://garthpuckerin.com" -ForegroundColor Gray
Write-Host "• https://www.garthpuckerin.com" -ForegroundColor Gray
Write-Host "• http://garthpuckerin.com (should redirect)" -ForegroundColor Gray
Write-Host ""

Write-Host "Test 3: Browser Cache" -ForegroundColor Magenta
Write-Host "• Try incognito/private browsing mode" -ForegroundColor White
Write-Host "• Clear browser cache completely" -ForegroundColor White
Write-Host "• Try different browser" -ForegroundColor White
Write-Host ""

Write-Host "💡 IMMEDIATE ACTION ITEMS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. ✅ Confirm SSL mode is 'Flexible'" -ForegroundColor White
Write-Host "2. 🧹 Purge Cloudflare cache completely" -ForegroundColor White
Write-Host "3. 🔍 Check for Page Rules in Cloudflare" -ForegroundColor White
Write-Host "4. 🌐 Test in incognito mode" -ForegroundColor White
Write-Host ""

Write-Host "📞 IF STILL BROKEN:" -ForegroundColor Red
Write-Host "We may need to temporarily disable .htaccess HTTPS redirects" -ForegroundColor White
Write-Host "or check GoDaddy file permissions/hosting status" -ForegroundColor White
Write-Host ""

Write-Host "🎯 Most likely fix: Purge cache + confirm Flexible mode!" -ForegroundColor Green
Write-Host ""