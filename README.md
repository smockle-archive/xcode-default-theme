# Xcode Colors

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/smockle.xcode-default-theme.svg)](https://marketplace.visualstudio.com/items?itemName=smockle.xcode-default-theme)

Brings the colors of the Xcode 'Default (Dark)' and 'Default (Light)' themes to Visual Studio Code.

## Xcode Default

Matches the default window and syntax colors of Xcode.

![Xcode Default (Dark) Screenshot](/default-dark.png?raw=true "Xcode Default (Dark) Screenshot")
![Xcode Default (Light) Screenshot](/default-light.png?raw=true "Xcode Default (Light) Screenshot")

## Xcode Partial

Matches the default window colors of Xcode and the default syntax colors of Visual Studio Code (with adapted saturation).

![Xcode Partial (Dark) Screenshot](/partial-dark.png?raw=true "Xcode Partial (Dark) Screenshot")
![Xcode Partial (Light) Screenshot](/partial-light.png?raw=true "Xcode Partial (Light) Screenshot")

# Recommended Settings

For a more complete theme, add the following lines to your `settings.json`:

```JSON
{
  "editor.cursorStyle": "line-thin",
  "editor.fontFamily": "'SF Mono', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 12,
  "editor.fontWeight": "500",
  "editor.lineHeight": 17,
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.lineHeight": 1.23,
  "editor.minimap.enabled": false,
  "editor.minimap.renderCharacters": false,
  "editor.overviewRulerBorder": false,
  "editor.renderIndentGuides": false,
  "editor.renderLineHighlight": "all",
  "workbench.activityBar.visible": false,
  "workbench.editor.tabCloseButton": "left",
  "workbench.editor.showIcons": false,
  "window.nativeTabs": true,
  "editor.tokenColorCustomizations": {
    "[Xcode Partial (Light)]": {
      "textMateRules": [
        {
          "scope": "comment",
          "settings": {
            "foreground": "#536579",
            "fontStyle": "italic"
          }
        }
      ]
    },
    "[Xcode Partial (Dark)]": {
      "textMateRules": [
        {
          "scope": "source",
          "settings": {
            "foreground": "#D4D4D4"
          }
        },
        {
          "scope": "comment",
          "settings": {
            "foreground": "#6C7986",
            "fontStyle": "italic"
          }
        }
      ]
    }
  }
}
```
