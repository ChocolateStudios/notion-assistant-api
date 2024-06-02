# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.python-launcher
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "rangav.vscode-thunder-client"
      "ms-python.python"
      "ms-toolsai.jupyter"
      "ms-python.debugpy"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm install";
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
        "install-nest-cli" = "npm install -g @nestjs/cli";
        "select-python-env" = "source myenv/bin/activate";
      };
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        # web = {
          # command = ["npm" "run" "dev" "--" "--port" "$PORT"];
          # command = ["npm" "run" "start:dev" "--" "--port" "$PORT"];
          # manager = "web";
        # };
      };
    };
  };
}