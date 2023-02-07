local project_root = require("pixie.utils").project_root_path

---@param args string
---@param on_success function
local function run_js(args, on_success)
  local command = "cd " .. project_root .. "/js/lib && " .. "node index.js " .. args
  vim.fn.jobstart(command, {
      -- TODO: check if there are any errors
      on_exit = on_success
  })
end

return run_js
