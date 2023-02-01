local run_js = require("pixie.run_js")
local install = require("pixie.install")

vim.api.nvim_create_user_command("Pixie", function(options)
  run_js()
end, {}
)

vim.api.nvim_create_user_command("PixieInstall", function(options)
  install()
end, {}
)
