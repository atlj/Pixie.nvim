local utils = require("pixie.utils")

local function install()
  if (utils.is_npm_installed() ~= true) then
    vim.notify("Node is not installed on your system", vim.log.levels.ERROR)
    return
  end

  -- This SHOULD work on every platform (let's hope so)
  -- TBH I'm not even sure why would a Windows user pick NeoVim
  -- Just go use Visual Studio Code you are already a Microsoft fan
  -- JK I'm also a Microsoft fan
  local command_base = "cd " .. utils.project_root_path .. "/js && "
  local command = command_base .. "npm install --omit=dev && npm run build"
  if utils.is_yarn_installed() then
    command = command_base .. "yarn install --production && yarn build"
  end

  vim.fn.jobstart(command, {
      on_stderr = function(_, data)
        -- data is {''} if there is no issue therefore check the lenght
        if #data > 1 then
          vim.notify(
              "There was an issue during Pixie installation. Please run :PixieInstall manually. If the issue persists, please check the issues https://github.com/atlj/Pixie.nvim/issues\n" ..
              table.concat(data, " "), vim.log.levels.ERROR)
        end
      end,
      stderr_buffered = true,
  })
end

return install
