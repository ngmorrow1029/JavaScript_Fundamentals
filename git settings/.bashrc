# swap accounts in git config --global 
alias swap='~/.bin/swap'

# Gets current git config --global user.name
parse_git_user() {
	git config --get user.name
}
# Exports to terminal as minimalist only displaying user.name
export PS1="\$(parse_git_user):> "

# Node Version Manager
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
