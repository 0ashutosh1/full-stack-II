$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$sites = @(
  @{ Name = "exp1"; Path = "exp1"; Type = "vite" },
  @{ Name = "exp2"; Path = "exp2"; Type = "vite" },
  @{ Name = "exp3"; Path = "exp3"; Type = "vite" },
  @{ Name = "exp4"; Path = "exp4"; Type = "vite" },
  @{ Name = "exp5"; Path = "exp5"; Type = "vite" },
  @{ Name = "exp6"; Path = "exp6"; Type = "vite" },
  @{ Name = "exp8"; Path = "exp8"; Type = "vite" },
  @{ Name = "exp10-frontend"; Path = "exp10/frontend"; Type = "static" }
)

Write-Host "Checking Netlify CLI..." -ForegroundColor Cyan
npx --yes netlify-cli --version | Out-Null

foreach ($site in $sites) {
  $fullPath = Join-Path $root $site.Path
  if (-not (Test-Path $fullPath)) {
    Write-Warning "Skipping $($site.Name): folder not found"
    continue
  }

  Write-Host "" 
  Write-Host "Deploying $($site.Name) from $fullPath" -ForegroundColor Yellow

  Push-Location $fullPath
  try {
    if ($site.Type -eq "vite") {
      npm install
      npm run build
      npx --yes netlify-cli deploy --prod --dir dist --message "$($site.Name) auto deploy"
    } else {
      npx --yes netlify-cli deploy --prod --dir . --message "$($site.Name) auto deploy"
    }
  } finally {
    Pop-Location
  }
}

Write-Host "All deployable experiments processed." -ForegroundColor Green
