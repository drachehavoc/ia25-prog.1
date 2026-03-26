{
  inputs = {
    nixpkgs.url     = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachSystem ["x86_64-linux" "aarch64-linux"] (system: let
      pkgs = nixpkgs.legacyPackages.${system};

    in rec {
      devShell = pkgs.mkShell {

        buildInputs = with pkgs; [
          git
          bun
          unzip
          bashInteractive # ISSO MANTEM O TERMINAL DO VSCODE OK
        ];

        shellHook = ''
          export GIT_AUTHOR_NAME="$USER"
          export GIT_COMMITTER_NAME="$USER"
          export GIT_AUTHOR_EMAIL="$USER@localhost"
          export GIT_COMMITTER_EMAIL="$USER@localhost"
	        export PSX="ia25~prog.1"
        '';
      };
    });
}
