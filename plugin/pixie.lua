local pixie = require("pixie")
local install = require("pixie.install")

vim.api.nvim_create_user_command("PixieCopy", function(options)
  pixie.generate_screenshot { mode = "copy", quality_multiplier = options.args }
end, {
  nargs = "?"
}
)

vim.api.nvim_create_user_command("PixieInstall", function(options)
  install()
end, {}
)
