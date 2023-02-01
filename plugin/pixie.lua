local pixie = require("pixie")
local install_dependencies = require("pixie.install_dependencies")

vim.api.nvim_create_user_command("Pixie", function(options)
  pixie.hello()
end, {}
)

vim.api.nvim_create_user_command("PixieInstall", function(options)
  install_dependencies()
end, {}
)
