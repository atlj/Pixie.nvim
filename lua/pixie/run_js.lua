local project_root = require("pixie.utils").project_root_path

---@param args string
local function run_js(args)
  local command = "cd " .. project_root .. "/js/lib && " .. "node index.js " .. args
  print(command)
  -- os.execute(command)
end

return run_js
