# ecosounds.org (QutBioacoustics.github.io)

This is the GitHub pages backing respository for the <http://research.ecosounds.org> website.

# Feedback
If there is a problem with any of the content on the ecosounds website you can:

- Submit an issue in this repo
- Or [contact us](http://baw.ecosounds.org/contact_us) 

# Conventions & Changes

**All changes made, especially to content, should be done via pull request.** All pull requests should be proofed.

We prefer the use of Markdown source files. 

Images may be stored in the repo. Videos should be hosted on YouTube. Audio can be hosted on soundcloud.

Large sets of images should be stored on another provider (e.g. DropBox, ownCloud, onedrive, etc...)

## Brand guidelines

- _Ecosounds_: use when referring to our brand
- _www.ecosounds.org_: use when referring to our website. **Never** use _ecosounds.org_, or _Ecosounds.org_.

 
# Test locally

Local testing needs a working install of `ruby` (version 2.3 or greater).
For Windows environments the [Ruby Installer](http://rubyinstaller.org/downloads/) project is a great project; install 
_Ruby 2.3.1 (x64)_ and _DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe_.

1. Open a prompt and `cd` to the checkout directory.
1. Then to update dependencies:

    ```shell
    $ bundle install
    $ bundle update
    ```

1. Then start the server:

    ```shell
    $ bundle exec jekyll serve --watch
    ```

1. In your browser, go to: `http://127.0.0.1:4000/`
1. Use <kbd>ctrl</kbd>+<kbd>c</kbd> in your prompt to kill the server 