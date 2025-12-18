# Ensure required tools are installed (curl, jq)
_sim_cicd_require_tools() {
  local install_cmd
  for cmd in curl jq; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      echo "[sim-cicd] Missing required command: $cmd, attempting to install..."
      
      # Detect package manager and install
      if command -v apt-get >/dev/null 2>&1; then
        install_cmd="apt-get update -qq && apt-get install -y $cmd"
      elif command -v yum >/dev/null 2>&1; then
        install_cmd="yum install -y $cmd"
      elif command -v dnf >/dev/null 2>&1; then
        install_cmd="dnf install -y $cmd"
      elif command -v apk >/dev/null 2>&1; then
        install_cmd="apk add --no-cache $cmd"
      elif command -v brew >/dev/null 2>&1; then
        install_cmd="brew install $cmd"
      else
        echo "[sim-cicd] Could not detect package manager to install $cmd" >&2
        exit 1
      fi
      
      if eval "$install_cmd"; then
        echo "[sim-cicd] Successfully installed $cmd"
      else
        echo "[sim-cicd] Failed to install $cmd" >&2
        exit 1
      fi
    fi
  done

  return 0
}

_sim_cicd_require_tools
