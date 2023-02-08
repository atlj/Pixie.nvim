# Pixie.nvim

<p align="center">
  <img src="https://user-images.githubusercontent.com/23079646/217597339-59ecb2ae-f575-422b-8818-e348fa5e03a3.png">
</p>

This NeoVim plugin generates ✨fancy✨ images from your code

## Installation

> This package requires `NodeJS` to be installed.
> See [How to install NodeJS](https://gist.github.com/MichaelCurrin/aa1fc56419a355972b96bce23f3bccba)

> If you are on Linux, please make sure to take a look at [this page](https://github.com/kufii/img-clipboard#linux-use).

### Using [packer.nvim](https://github.com/wbthomason/packer.nvim)


```lua
  use({
    "atlj/Pixie.nvim",
    run = function() vim.cmd.PixieInstall() end
  })
```

## Usage
1. Highlight the text you wish to create a Screenshot from
2. Use `:PixieCopy` command to copy the generated image to your clipboard
3. You can now paste the generated image

## How does this work

This plugin uses [puppeteer](https://github.com/puppeteer/puppeteer) to headlessly render and take a screenshot of an auto-generated HTML file. 

## Similar plugins

1. [vim-silicon](https://github.com/segeljakt/vim-silicon) uses [silicon](https://github.com/Aloxaf/silicon) to create images using GPU.

## Roadmap

### G: Issues to fix
  1. If a line is too wide, it crashes
  3. Quality multiplier cannot take a float value, and it is NaN on javascript when not defined

### H: Quality of Life
  2. Add `PixieSave` command
  3. Add theming support and new themes
  4. Make the generated screenshots bordered
  5. Get the quality etc. from a config

### Next steps:
  1. Create a simple logo using Midjourney
  2. Share on Twitter
