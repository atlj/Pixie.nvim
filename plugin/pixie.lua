local pixie = require("pixie")

vim.api.nvim_create_user_command("Pixie", function(options)
  pixie.hello()
end, {}
)
