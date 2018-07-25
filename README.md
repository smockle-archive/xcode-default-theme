# Xcode Colors

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/smockle.xcode-default-theme.svg)](https://marketplace.visualstudio.com/items?itemName=smockle.xcode-default-theme)

Brings the colors of the Xcode 'Default (Dark)' and 'Default (Light)' themes to Visual Studio Code

![Screenshot (Dark)](/default-dark.png?raw=true "Screenshot (Dark)")
![Screenshot (Light)](/default-light.png?raw=true "Screenshot (Light)")

## Installation

1.  Install the [“Titlebar-Less VSCode on macOS” extension](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-titlebar-less-macos)

2.  Install [this extension](https://marketplace.visualstudio.com/items?itemName=smockle.xcode-default-theme).

3.  Add the following lines to your `settings.json`:

```JSON
{
  "editor.cursorStyle": "line-thin",
  "editor.fontFamily": "'SF Mono', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 12,
  "editor.lineHeight": 17,
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.lineHeight": 1.23,
  "editor.minimap.enabled": false,
  "editor.overviewRulerBorder": false,
  "editor.renderIndentGuides": false,
  "editor.renderLineHighlight": "all",
  "workbench.activityBar.visible": false,
  "workbench.editor.tabCloseButton": "left",
  "workbench.editor.tabSizing": "shrink",
  "workbench.editor.showIcons": false,
  "window.nativeTabs": false,
  "window.titleBarStyle": "custom"
}
```
