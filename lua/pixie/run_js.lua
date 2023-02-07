local project_root = require("pixie.utils").project_root_path

---@param args string
---@param on_success function
local function run_js(args, on_success)
  local command = "cd " .. project_root .. "/js/lib && " .. "node index.js " .. args
  vim.fn.jobstart(command, {
      on_exit = function (_, status)
        if status == 0 then
          on_success()
        end
      end
  })
end

return run_js
