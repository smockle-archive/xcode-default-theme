# Xcode Colors

[![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/smockle.xcode-default-theme.svg)](https://marketplace.visualstudio.com/items?itemName=smockle.xcode-default-theme)

Brings the colors of the Xcode 'Default' theme to Visual Studio Code

![Screenshot](/screenshot.png?raw=true "Screenshot")

## Installation

1.  Install the [“Custom CSS and JS Loader” extension](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css).

2.  Install [this extension](https://marketplace.visualstudio.com/items?itemName=smockle.xcode-default-theme).

3.  Add the following lines to your `settings.json`:

```JSON
{
  "editor.cursorStyle": "line-thin",
  "editor.fontFamily": "'SF Mono', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 11,
  "editor.lineHeight": 16.4,
  "terminal.integrated.fontSize": 11,
  "terminal.integrated.lineHeight": 1.25,
  "editor.minimap.enabled": false,
  "editor.overviewRulerBorder": false,
  "editor.renderIndentGuides": false,
  "editor.renderLineHighlight": "all",
  "workbench.activityBar.visible": false,
  "workbench.editor.tabCloseButton": "left",
  "workbench.editor.tabSizing": "shrink",
  "workbench.editor.showIcons": false,
  "window.nativeTabs": true,
  "window.titleBarStyle": "native",
  "vscode_custom_css.imports": [
    "file:///Users/<username>/.vscode/extensions/smockle.xcode-default-theme-<version>/xcode-default-theme.css"
  ]
}
```

## Colors

| Name           | Hex     | Usage                                                                                       |
| :------------- | :------ | :------------------------------------------------------------------------------------------ |
| Black          | #000000 | Plain Text; Cursor                                                                          |
| Red            | #C41A16 | Strings                                                                                     |
| Green          | #007400 | Comments; Documentation Markup; Documentation Markup Keywords                               |
| Yellow         | #643820 | Preprocessor Statements; Attributes; Project Preprocessor Macros; Other Preprocessor Macros |
| Bright Yellow  | #816927 | Markup Tags                                                                                 |
| Blue           | #1C00CF | Characters; Numbers; URLs                                                                   |
| Magenta        | #AA0D91 | Keywords                                                                                    |
| Cyan           | #26474B | Project Function and Method Names; Project Constants                                        |
| Bright Cyan    | #3F6E74 | Project Class Names; Project Type Names; Project Instance Variables and Globals             |
| Violet         | #2E0D6E | Other Function and Method Names; Other Constants                                            |
| Bright Violet  | #5C2699 | Other Class Names; Other Type Names; Other Instance Variables and Globals                   |
| Bright Blue    | #A4CDFF | Selection                                                                                   |
| Brightest Blue | #E8F2FF | Current Line                                                                                |
| White          | #FFFFFF | Background                                                                                  |
| Gray           | #CCCCCC | Invisibles                                                                                  |
|                | #ECECEC | Status Bar Background                                                                       |
|                | #F5F5F5 | Window Background                                                                           |
|                | #242424 | Window Foreground                                                                           |
|                | #CDCDCD | Window Border                                                                               |
