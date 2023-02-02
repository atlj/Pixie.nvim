local project_root = require("pixie.utils").project_root_path

local function install()
  -- This SHOULD work on every platform (let's hope so)
  -- TBH I'm not even sure why would a Windows user pick NeoVim
  -- Just go use Visual Studio Code you are already a Microsoft fan
  -- JK I'm also a Microsoft fan
  local command = "cd " .. project_root .. "/js && " .. "npm install --only=prod && npm run build"
  local status = os.execute(command)

  if (status ~= 0) then
    print("There was an issue during Pixie installation. Please run :PixieInstall manually. If the issue persists, please check the issues https://github.com/atlj/Pixie.nvim/issues")
  end
end

return install
