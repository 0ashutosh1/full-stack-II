$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$targets = @(
  @{ key = "exp1"; path = "exp1"; type = "vite"; site = "mridul-23bis70122-exp1-fs2" },
  @{ key = "exp2"; path = "exp2"; type = "vite"; site = "mridul-23bis70122-exp2-fs2" },
  @{ key = "exp3"; path = "exp3"; type = "vite"; site = "mridul-23bis70122-exp3-fs2" },
  @{ key = "exp4"; path = "exp4"; type = "vite"; site = "mridul-23bis70122-exp4-fs2" },
  @{ key = "exp5"; path = "exp5"; type = "vite"; site = "mridul-23bis70122-exp5-fs2" },
  @{ key = "exp6"; path = "exp6"; type = "vite"; site = "mridul-23bis70122-exp6-fs2" },
  @{ key = "exp8"; path = "exp8"; type = "vite"; site = "mridul-23bis70122-exp8-fs2" },
  @{ key = "exp10"; path = "exp10/frontend"; type = "static"; site = "mridul-23bis70122-exp10-frontend-fs2" }
)

$results = @()

foreach ($t in $targets) {
  $fullPath = Join-Path $root $t.path
  Write-Host "Deploying $($t.key) from $fullPath" -ForegroundColor Cyan

  Push-Location $fullPath
  try {
    if ($t.type -eq "vite") {
      npm install | Out-Null
      npm run build | Out-Null
      $json = npx --yes netlify-cli deploy --prod --no-build --dir dist --site-name $t.site --json --message "$($t.key) deploy"
    }
    else {
      $json = npx --yes netlify-cli deploy --prod --no-build --dir . --site-name $t.site --json --message "$($t.key) deploy"
    }

    $obj = $json | ConvertFrom-Json
    $results += [pscustomobject]@{
      experiment = $t.key
      site       = $t.site
      url        = $obj.url
      deploy_url = $obj.deploy_url
      logs       = $obj.logs
    }
  }
  finally {
    Pop-Location
  }
}

$results | ConvertTo-Json -Depth 4 | Set-Content (Join-Path $root "netlify-deploy-results.json")
$results | Format-Table -AutoSize
