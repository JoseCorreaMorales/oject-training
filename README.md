# oject-training

archivo create-jet-component.ps1:

powershell

param (
    [string]$ComponentName
)

if (-not $ComponentName) {
    Write-Host "❌ Debes proporcionar un nombre para el componente."
    Write-Host "Ejemplo: .\create-jet-component.ps1 counter"
    exit 1
}

$ComponentDir = "src\js\jet-composites\$ComponentName"

# Crear la estructura de carpetas
New-Item -ItemType Directory -Path $ComponentDir -Force

# Crear archivos vacíos
New-Item -ItemType File -Path "$ComponentDir\$ComponentName.css"
New-Item -ItemType File -Path "$ComponentDir\$ComponentName.html"
New-Item -ItemType File -Path "$ComponentDir\$ComponentName.js"
New-Item -ItemType File -Path "$ComponentDir\loader.js"

# Crear el archivo JSON con configuración base
$JsonContent = @"
{
  "name": "$ComponentName",
  "version": "1.0.0",
  "jetVersion": ">=7.0.0",
  "description": "Componente $ComponentName",
  "properties": {}
}
"@

$JsonContent | Out-File -Encoding utf8 "$ComponentDir\jet-composite.json"

Write-Host "✅ Estructura de '$ComponentName' creada correctamente."
📌 Pasos para usarlo:

Guarda el archivo como create-jet-component.ps1.
Ejecuta el script en PowerShell:
powershell
Copiar
Editar
.\create-jet-component.ps1 counter