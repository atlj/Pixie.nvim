local pixie = require("pixie")
local install = require("pixie.install")

vim.api.nvim_create_user_command("PixieCopy", function(options)
  pixie.generate_screenshot { mode = "copy" }
end, {}
)

vim.api.nvim_create_user_command("PixieInstall", function(options)
  install()
end, {}
)
