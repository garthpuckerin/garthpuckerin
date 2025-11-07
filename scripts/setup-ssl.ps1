# Cloudflare SSL Setup Script
# Run this in PowerShell to get guided setup

Write-Host ""
Write-Host "CLOUDFLARE + LET'S ENCRYPT SETUP" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "BENEFITS:" -ForegroundColor Green
Write-Host "  - FREE SSL certificate (Let's Encrypt backend)" -ForegroundColor White
Write-Host "  - Auto-renewal (never expires)" -ForegroundColor White
Write-Host "  - Better performance (CDN)" -ForegroundColor White
Write-Host "  - DDoS protection" -ForegroundColor White
Write-Host "  - Works perfectly with GoDaddy" -ForegroundColor White
Write-Host ""

Write-Host "SETUP STEPS:" -ForegroundColor Yellow
Write-Host ""

Write-Host "1. CLOUDFLARE SIGNUP" -ForegroundColor Magenta
Write-Host "   Opening Cloudflare..." -ForegroundColor Gray
Start-Process "https://www.cloudflare.com"
Read-Host "   Press Enter when you've created your account"

Write-Host ""
Write-Host "2. ADD DOMAIN" -ForegroundColor Magenta
Write-Host "   - Click 'Add a Site'" -ForegroundColor White
Write-Host "   - Enter: garthpuckerin.com" -ForegroundColor White
Write-Host "   - Choose FREE plan" -ForegroundColor White
Read-Host "   Press Enter when domain is added"

Write-Host ""
Write-Host "3. COPY NAMESERVERS" -ForegroundColor Magenta
Write-Host "3. COPY NAMESERVERS" -ForegroundColor Magenta
Write-Host "   Cloudflare will show you 2 nameservers like:" -ForegroundColor White
Write-Host "   - something.ns.cloudflare.com" -ForegroundColor Gray
Write-Host "   - something.ns.cloudflare.com" -ForegroundColor Gray
Read-Host "   Press Enter when you've copied them"

Write-Host ""
Write-Host "4. UPDATE GODADDY DNS" -ForegroundColor Magenta
Write-Host "   Opening GoDaddy DNS Management..." -ForegroundColor Gray
Start-Process "https://dcc.godaddy.com/manage/dns"
Write-Host "   - Go to your domain" -ForegroundColor White
Write-Host "   - Click 'Change Nameservers'" -ForegroundColor White
Write-Host "   - Paste the Cloudflare nameservers" -ForegroundColor White
Read-Host "   Press Enter when nameservers are updated"

Write-Host ""
Write-Host "5. CONFIGURE SSL" -ForegroundColor Magenta
Write-Host "   Back in Cloudflare:" -ForegroundColor White
Write-Host "   - Go to SSL/TLS tab" -ForegroundColor White
Write-Host "   - Set mode to 'Full (strict)'" -ForegroundColor White
Write-Host "   - Enable 'Always Use HTTPS'" -ForegroundColor White
Write-Host "   - Enable 'HSTS'" -ForegroundColor White
Read-Host "   Press Enter when SSL is configured"

Write-Host ""
Write-Host "6. WAIT FOR ACTIVATION" -ForegroundColor Magenta
Write-Host "   - DNS propagation: Up to 24 hours" -ForegroundColor White
Write-Host "   - SSL activation: Usually 15 minutes" -ForegroundColor White
Write-Host ""

Write-Host "YOUR PORTFOLIO WILL HAVE FREE SSL!" -ForegroundColor Green
Write-Host ""

Write-Host "VERIFICATION LINKS:" -ForegroundColor Yellow
Write-Host "Opening SSL test tools..." -ForegroundColor Gray
Start-Process "https://www.ssllabs.com/ssltest/"
Start-Process "https://securityheaders.com/"

Write-Host ""
Write-Host "CURRENT PORTFOLIO STATUS:" -ForegroundColor Cyan
Write-Host "   - Contact form: Ready (Formspree)" -ForegroundColor Green
Write-Host "   - Security headers: Configured" -ForegroundColor Green
Write-Host "   - HTTPS redirects: In .htaccess" -ForegroundColor Green
Write-Host "   - Performance: Optimized" -ForegroundColor Green
Write-Host ""
Write-Host "Ready for deployment to GoDaddy!" -ForegroundColor Green
Write-Host ""