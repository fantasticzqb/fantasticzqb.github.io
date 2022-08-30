(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{378:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("git：分布式版本控制工具")]),s._v(" "),t("p",[s._v("代码托管平台：github、gitee、gitlab")]),s._v(" "),t("h1",{attrs:{id:"_1、git安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、git安装"}},[s._v("#")]),s._v(" 1、git安装")]),s._v(" "),t("p",[s._v("windows安装：进入网站https://git-scm.com/下载安装，然后在cmd命令行配置")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" git config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"itnanls"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" git config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("email "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"itnanls@163.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查信息是否写入成功")]),s._v("\ngit config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("list")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("ubuntu配置：apt-get install git")]),s._v(" "),t("p",[s._v("centos配置：yum install git")]),s._v(" "),t("p",[s._v("git的命令其实和linux命令类似")]),s._v(" "),t("h1",{attrs:{id:"_2、git基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、git基本操作"}},[s._v("#")]),s._v(" 2、git基本操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("通过以下命令查看git所有的配置：\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-console line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改\n$ git config --global user.name "itnanls"\n$ git config --global user.email "510180298@qq.com"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("再次强调，如果使用了 "),t("code",[s._v("--global")]),s._v(" 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 "),t("code",[s._v("--global")]),s._v(" 选项的命令来配置。")]),s._v(" "),t("p",[s._v("很多 GUI 工具都会在第一次运行时帮助你配置这些信息。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("进行版本控制：\n1、初始化git，生成隐藏的git文件夹进行管理代码。在同一个目录中，只执行一次。\ngit init\n2、把代码托管给git管理。简称追踪文件。每次文件在同一个目录中如果要放到暂存区，每次新增一个文件就要执行一次。\ngit add a.txt\n3、把代码提交到版本库，进行完这一步之后才可以日后对代码进行回滚。\ngit commit -m '这里可以写提交信息，这就是-m参数的作用'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("hr"),s._v(" "),t("h1",{attrs:{id:"_3、git的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、git的状态"}},[s._v("#")]),s._v(" 3、git的状态")]),s._v(" "),t("p",[s._v("git存在三种状态："),t("strong",[s._v("已提交（committed）")]),s._v("、"),t("strong",[s._v("已修改（modified）")]),s._v(" 和 "),t("strong",[s._v("已暂存（staged）")]),s._v("。")]),s._v(" "),t("p",[s._v("这会让我们的 Git 项目拥有三个阶段：工作区、暂存区以及 Git 目录。")]),s._v(" "),t("p",[s._v("当输入了add命令后，代码会进入暂存区")]),s._v(" "),t("p",[s._v("输入了commit命令则会进入git目录，也就是版本库中")]),s._v(" "),t("p",[s._v("基本的 Git 工作流程如下：")]),s._v(" "),t("ol",[t("li",[s._v("在工作区中修改文件。")]),s._v(" "),t("li",[s._v("将你想要下次提交的更改选择性地暂存，这样只会将更改的部分添加到暂存区。")]),s._v(" "),t("li",[s._v("提交更新，找到暂存区的文件，将快照永久性存储到 Git 目录。")]),s._v(" "),t("li",[s._v("如果 Git 目录中保存着特定版本的文件，就属于 "),t("strong",[s._v("已提交")]),s._v(" 状态。 如果文件已修改并放入暂存区，就属于 "),t("strong",[s._v("已暂存")]),s._v(" 状态。 如果自上次检出后，作了修改但还没有放到暂存区域，就是 "),t("strong",[s._v("已修改")]),s._v(" 状态。")])]),s._v(" "),t("hr"),s._v(" "),t("h1",{attrs:{id:"_4、git如何保持完整性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、git如何保持完整性"}},[s._v("#")]),s._v(" 4、git如何保持完整性")]),s._v(" "),t("p",[s._v("Git 中所有的数据在存储前都计算校验和，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。")]),s._v(" "),t("p",[s._v("Git 用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）。 这是一个由 40 个十六进制字符（0-9 和 a-f）组成的字符串，基于 Git 中文件的内容或目录结构计算出来。 SHA-1 哈希看起来是这样：")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("24b9da6552252987aa493b52f8696cd6d3b00373\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Git 中使用这种哈希值的情况很多，你将经常看到这种哈希值。 实际上，Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名。")]),s._v(" "),t("h1",{attrs:{id:"_5、git-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、git-status"}},[s._v("#")]),s._v(" 5、git status")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('查看状态，可以查看文件是否已经加入了暂存区域、以及是否提交\ngit status\n如果后面出现了(use "git restore --staged <file>..." to unstage)，表示某文件并未放到暂存区域。\n如果后面出现了 (use "git add <file>..." to include in what will be committed)，表示某文件并未提交\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在输入add命令添加到暂存区后：如果代码报错：git上传代码报错-The file will have its original line endings in your working directory")]),s._v(" "),t("p",[s._v("原因是因为文件中换行符的差别导致的。这个对结果影响不大。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("解决方案：\n删除文件在暂存区的缓存，此代码是.代表所有文件，根据实际情况调整\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n然后重新上传"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("代码即可。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"_6、git-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、git-log"}},[s._v("#")]),s._v(" 6、git log")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("显示git历史操作记录，git日志(里面包含提交文件的信息以及编码，作者信息，提交日期)。其中commit后的文件使用了SHA-1算法生成了一大堆编号，这样防止篡改文件。\ngit log\n当日志过长时，可以查看简单一点的格式化好的日志\ngit log --pretty=oneline\n以分支的方式查看日志\ngit log --pretty=oneline --graph\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h1",{attrs:{id:"_7、版本回退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、版本回退"}},[s._v("#")]),s._v(" 7、版本回退")]),s._v(" "),t("p",[t("em",[s._v("快照即提交的版本，每个版本我们称之为一个快照。")])]),s._v(" "),t("p",[s._v("版本回退的本质是改变了head指针的指向")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("回退到上一个版本\ngit reset head~\nhard参数回退上一个版本\ngit reset --hard head~\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("em",[s._v("注：HEAD 表示最新提交的快照，而 HEAD~ 表示 HEAD 的上一个快照，HEAD~~表示上上个快照，如果表示上10个快照，则可以用HEAD ~10")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("参数选择（必须掌握）")]),s._v(" "),t("p",[s._v("--hard : 回退版本库，暂存区，工作区。（因此我们修改过的代码就没了，需要谨慎使用）。reset 不仅移动 HEAD 的指向，将快照回滚动到暂存区域，它还将暂存区域的文件还原到工作目录。")]),s._v(" "),t("p",[s._v("--mixed: 回退版本库，暂存区。(--mixed为git reset的默认参数，即当任何参数都不加的时候的参数)")]),s._v(" "),t("p",[s._v("--soft: 回退版本库。就相当于只移动 HEAD 的指向，但并不会将快照回滚到暂存区域。相当于撤消了上一次的提交（commit）。")])]),s._v(" "),t("li",[t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220704155354216.png",alt:"image-20220704155354216"}})]),s._v(" "),t("p",[s._v('如果版本回退遇到这样的报错，输入：git commit --allow-empty -n -m "Initial commit"')])])]),s._v(" "),t("h1",{attrs:{id:"_8、回退指定的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、回退指定的版本"}},[s._v("#")]),s._v(" 8、回退指定的版本")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("参数部分是hard以及指定版本的SHA-1值\ngit reset --hard c71321435465487swaw\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("也查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）\ngit reflog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("git reflog与git log的区别：")]),s._v(" "),t("p",[s._v("例如执行 git reset --hard head~，退回到上一个版本，用git log则是看不出来被删除的commitid，用git reflog则可以看到被删除的commitid，我们就可以买后悔药，恢复到被删除的那个版本。")]),s._v(" "),t("h1",{attrs:{id:"_9、git-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、git-diff"}},[s._v("#")]),s._v(" 9、git diff")]),s._v(" "),t("p",[s._v("用来对比工作区、暂存区、版本库中的版本是否相同")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("比较暂存区与工作树(工作区)的不同\ngit diff\n\n解释：\n**第一行：**diff --git a/b.txt b/b.txt 表示对比的是存放在暂存区域和工作目录的b.txt。a是暂存区的文件，b是工作区的文件。\n**第二行：**index 9ab39d5..4d37a8a 100644 表示对应文件的 ID 分别是 9ab39d5和 4d37a8a，左边暂存区域，后边当前目录。最后的 100644 是指定文件的类型和权限\n第三行：--- a/b.txt\n--- 表示该文件是旧文件（存放在暂存区域）\n第四行：+++ b/b.txt +++ 表示该文件是新文件（存放在工作区域）\n第五行：@@ -2,3 +2,4 @@ 以 @@ 开头和结束，中间的“-”表示旧文件，“+”表示新文件，后边的数字表示“开始行号，显示行数”\n内容：+代表新增的行 -代表少了的行\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("比较工作树(工作区)与最新提交(版本库)的不同。head指的是当前最新版本库中的版本\ngit diff head\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("比较仓库(版本库)和暂存区的不同。参数是SHA-1值\ngit diff --cached 0c78c78\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("比较两个历史快照的不同。参数是两个SHA-1值\ngit diff 5ada78a c12aws4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h1",{attrs:{id:"_10、删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、删除文件"}},[s._v("#")]),s._v(" 10、删除文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("不小心删除了工作区中的b文件，想恢复b文件。前提是b文件必须是暂存区中的文件才行。\ngit checkout -- b.txt\n\n我想撤销所有加入暂存区的文件\ngit reset HEAD -- .\n\n删除b文件。会删除工作区与暂存区的文件，后面可以直接进行提交来删除版本库中的文件\ngit rm b.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h1",{attrs:{id:"_11、重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、重命名"}},[s._v("#")]),s._v(" 11、重命名")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("把a.txt重命名为b.txt。修改了工作区和暂存区。后面提交即可到版本库中。\ngit mv a.txt b.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h1",{attrs:{id:"_12、忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、忽略文件"}},[s._v("#")]),s._v(" 12、忽略文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("有一些文件我不想让git进行管理。例如程序的配置文件等等。\n过程：首先，要新建一个gitignore文件。然后在该文件里去写要让git忽略哪些文件\n\n创建文件\ntouch .gitigore\n\n把所有以temp为后缀的文件让git忽略掉不要管理\necho *.temp >> .gitignore\n\n也可以把gitignore文件也忽略掉\necho .gitignore >> .gitignore\n\n不过呢，一般不建议忽略掉gitignore文件，可以把它提交到版本库中\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h1",{attrs:{id:"_13、分支-多人协同开发的精髓"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、分支-多人协同开发的精髓"}},[s._v("#")]),s._v(" 13、分支（多人协同开发的精髓）")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220704165547579.png",alt:"image-20220704165547579"}})]),s._v(" "),t("p",[s._v("例如图中的head -> master（head是个指针，指向当前的主分支master）")]),s._v(" "),t("p",[s._v("这里的master就是主分支，是一个较成熟的版本，是可以发布上线的")]),s._v(" "),t("p",[s._v("假设你的大项目已经上线了（有上百万人在使用），过了一段时间")]),s._v(" "),t("p",[s._v("你突然觉得应该添加一些新的功能，但是为了保险起见，你肯定不能在当前项目上直接进行开发，这时候你就有创建分支的需要了。")]),s._v(" "),t("p",[s._v("把主分支master的版本复制过来，作为分支。在分支上进行开发新的需求。如果分支开发成功，最后把分支合并到主分支master中，成为新的主分支master。最后再进行add以及commit放到版本库中即可。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("创建名为login的分支\ngit branch login\n\n查看当前是哪个分支\ngit status\n\n切换到login分支\ngit checkout login\n\n切换到master主分支\ngit checkout master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h1",{attrs:{id:"_14、分支合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、分支合并"}},[s._v("#")]),s._v(" 14、分支合并")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("分支合并的过程：首先要切换到主分支，再合并分支\n\n切换成主分支\ngit checkout master\n\n合并分支login\ngit merge login\n\n当有多个分支修改了同一个文件，并且之后进行分支合并时，会出现冲突现象。解决方法也简单，只要从工作区打开代码根据需要进行修改即可。\n\n如何尽量避免冲突现象呢？\n每天下班都要提交新的代码。每天上班时要从主分支去选择一个最新的版本，把它放到自己新建的分支中。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h1",{attrs:{id:"_15、删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、删除分支"}},[s._v("#")]),s._v(" 15、删除分支")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("在开发完对应的功能，以及已经合并到主分支master后，要把分支删除\n\n删除login分支\ngit branch -d login\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h1",{attrs:{id:"_16、码云"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16、码云"}},[s._v("#")]),s._v(" 16、码云")]),s._v(" "),t("p",[s._v("私有仓库需要管理员把开发者添加到仓库管理中，以后才能拉取代码。作为管理员可以在gitee里设置保护分支规则，防止master主分支被其他人修改")]),s._v(" "),t("p",[s._v("合并到master主分支一般由项目经理负责合并")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220705133407766.png",alt:"image-20220705133407766"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220705135411478.png",alt:"image-20220705135411478"}})]),s._v(" "),t("p",[s._v("git remote -v —查看远程仓库的地址")]),s._v(" "),t("p",[s._v("git remote add origin xxxxx —表示把gitee的源写入git中，xxxxx表示gitee的仓库地址")]),s._v(" "),t("p",[s._v("git push -u origin master —表示把git中当前的主分支推送到到orgin源中，-u以及后面的参数只用在第1次使用，以后直接写git push即可。git push之后就可以把主分支的代码提交到gitee的代码仓库中。")]),s._v(" "),t("h1",{attrs:{id:"_17、多人协作工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17、多人协作工作流程"}},[s._v("#")]),s._v(" 17、多人协作工作流程")]),s._v(" "),t("p",[s._v("首先根据公司的规模：分支划分一般为master branch主分支，develop branch开发分支，feature branch功能分支")]),s._v(" "),t("p",[s._v("每天的工作，首先开发人员从代码托管平台拉取（clone克隆）代码（master+develop），然后切换分支为develop，再新建分支例如：feature，从新建feature分支中完成代码开发，然后commit提交到版本库。后续会把feature分支与develop分支进行合并，形成新的develop分支。合并成功后，把feature分支删除。再把新的develop分支push到托管平台的仓库中。等到以后功能完成后，由项目经理把develop分支合并到master分支中。(自己为了开发而创建的新的分支不要push到托管平台中，要合并后的分支再push到托管平台中)")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220705154053791.png",alt:"image-20220705154053791"}})]),s._v(" "),t("p",[s._v("push也可能出现冲突现象，需要输入git pull，解决冲突现象（也可以不解决直接保存），之后再psuh进去仓库。"),t("strong",[s._v("因此应该养成好习惯，在push前先pull一下")]),s._v("（pull相当于把别人合并的develop分支和你自己的develop分支再进行合并的过程）")]),s._v(" "),t("p",[s._v("备用方案是强推：git push -f origin master，优先使用pull")]),s._v(" "),t("h1",{attrs:{id:"_18、多人协作实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18、多人协作实战"}},[s._v("#")]),s._v(" 18、多人协作实战")]),s._v(" "),t("h1",{attrs:{id:"_19、多团队合作实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19、多团队合作实战"}},[s._v("#")]),s._v(" 19、多团队合作实战")]),s._v(" "),t("p",[s._v("多团队的话，仓库管理员创建仓库要公开")]),s._v(" "),t("p",[s._v("公开仓库一定要设置权限，管理分支保护。")]),s._v(" "),t("p",[s._v("然后开发人员进行fork，把该仓库添加到自己的仓库中")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316162529369.89eebb82.png",alt:"image-20210316162529369"}})]),s._v(" "),t("p",[s._v("在自己的仓库中进行clone、push、pull等操作。之后进行pull request操作，请求把自己仓库中的源分支与项目仓库的目标分支进行合并。后面由项目经理审查合并分支。对于开发人员来说，pull request操作代替的是push操作。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316162936698.574f16d7.png",alt:"image-20210316162936698"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316162907857.f8f42c87.png",alt:"image-20210316162907857"}})]),s._v(" "),t("h1",{attrs:{id:"_20、issue介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20、issue介绍"}},[s._v("#")]),s._v(" 20、issue介绍")]),s._v(" "),t("p",[s._v("issue可以理解为日常工作的指派。也有禅道这样的项目管理工具里面都具有issue的功能")]),s._v(" "),t("p",[s._v("给开源项目提供解决方案，也是和19多团队合作实战是一样的操作")]),s._v(" "),t("h1",{attrs:{id:"_21、rebase合并提交信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21、rebase合并提交信息"}},[s._v("#")]),s._v(" 21、rebase合并提交信息")]),s._v(" "),t("p",[s._v("每次commit都会留下一条记录，使用rebase合并一些commit会使commit信息看起来更加清晰。")]),s._v(" "),t("p",[s._v("合并后会弹出黑窗口，在窗口里写提交信息")]),s._v(" "),t("p",[s._v("合并 commit 尽量在 push 前完成。或者说在rebase之前要先进行pull")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("合并commit，xxx指的是SHA-1值。这条命令指的是：通过SHA-1值指定的commit时间节点，到现在最新的commit全部合并成一个commit\ngit rebase -i xxx\n\n把时间节点最新的两个commit，合并成一个commit\ngit rebase -i head~~\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("弹出黑窗口后的操作：")]),s._v(" "),t("p",[s._v("vi指令 "),t("code",[s._v("i")]),s._v(" 进入编辑模式，修改你不想保留的 commit 记录前的 "),t("code",[s._v("pick")]),s._v(" 为 "),t("code",[s._v("squash")]),s._v("(或者"),t("code",[s._v("s")]),s._v(")。"),t("code",[s._v("git")]),s._v(" 会把前面为 "),t("code",[s._v("squash")]),s._v("的 commit 记录与它的上一条记录合并为一条。")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220705174046956.png",alt:"image-20220705174046956"}})]),s._v(" "),t("p",[s._v("注意要确保第一条为 "),t("code",[s._v("pick")]),s._v("，因为"),t("code",[s._v("squash")]),s._v("的作用是把 commit 合并到上一个提交，所以必须保证至少第一个提交被 "),t("code",[s._v("pick")]),s._v("。")]),s._v(" "),t("p",[s._v("如果你不小心把所有的"),t("code",[s._v("pick")]),s._v("都改为了"),t("code",[s._v("s")]),s._v("，然后保存退出，会收到一个错误提示："),t("code",[s._v("cannot 'squash' without a previous commit")]),s._v("。不要怕，根据它的下一个提示操作就可以了：尽管它提示了2种方法来处理，我还是推荐你使用"),t("code",[s._v("git rebase --abort")]),s._v("，然后重来一次 rebase，这样最稳妥。")]),s._v(" "),t("p",[s._v("后面会弹出第二个黑窗口：")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CAdmin%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220705174307549.png",alt:"image-20220705174307549"}})]),s._v(" "),t("p",[s._v("没有#号的行，就是commit的提交信息，改成自己的提交信息即可。#号就是注释。")]),s._v(" "),t("h1",{attrs:{id:"_22、clone和pull代码拉取的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22、clone和pull代码拉取的区别"}},[s._v("#")]),s._v(" 22、clone和pull代码拉取的区别")]),s._v(" "),t("p",[s._v("1、git clone 与 git pull 相同点\n相同点：都是从远程服务器拉取代码到本地")]),s._v(" "),t("p",[s._v("2、git clone 与 git pull 不同点\ngit clone\n是在本地没有版本库的时候，从远程服务器克隆整个版本库到本地，是一个本地从无到有的过程。")]),s._v(" "),t("p",[s._v("git pull\n在本地有版本库的情况下，从远程库获取最新commit 数据（如果有的话），并merge（合并）到本地。")]),s._v(" "),t("p",[s._v("git pull = git fetch + git merge")]),s._v(" "),t("p",[s._v("3、使用场景\n通常情况下，远程操作的第一步，是使用git clone从远程主机克隆一个版本库到本地。")]),s._v(" "),t("p",[s._v("本地修改代码后，每次从本地仓库push到远程仓库之前都要先进行git pull操作，保证push到远程仓库时没有版本冲突。")]),s._v(" "),t("h1",{attrs:{id:"_23、idea中使用git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23、idea中使用git"}},[s._v("#")]),s._v(" 23、idea中使用git")]),s._v(" "),t("p",[s._v("在idea右下角可以选择分支")]),s._v(" "),t("p",[s._v("配置")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316223514317.e5ebf480.png",alt:"image-20210316223514317"}})]),s._v(" "),t("p",[s._v("可以下载码云插件 gitee")]),s._v(" "),t("blockquote",[t("p",[s._v("从远程仓库拉项目")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316223943198.e938cc5b.png",alt:"image-20210316223943198"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316224009006.380c58a5.png",alt:"image-20210316224009006"}})]),s._v(" "),t("blockquote",[t("p",[s._v("控制台查看分支提交等信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316223754144.d07d1ad2.png",alt:"image-20210316223754144"}})]),s._v(" "),t("blockquote",[t("p",[s._v("提交代码")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316223853465.8dca464a.png",alt:"image-20210316223853465"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://www.ydlclass.com/doc21xnv/assets/image-20210316223911336.c8762fc5.png",alt:"image-20210316223911336"}})]),s._v(" "),t("h1",{attrs:{id:"_24、git传输的两种协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24、git传输的两种协议"}},[s._v("#")]),s._v(" 24、git传输的两种协议")]),s._v(" "),t("p",[s._v("首先是git传输的两种协议：https、SSH")]),s._v(" "),t("p",[s._v("https的优点：")]),s._v(" "),t("p",[s._v("1、只需要在push的时候输入gitee的账号和密码就行")]),s._v(" "),t("p",[s._v("2、企业上线项目一般会打开80和443这两个常见的http和https协议的端口（只有打开这两个端口，http和https才能用），使用这两个协议就能在架设防火墙的企业中绕过安全限制来正常使用git，非常方便。")]),s._v(" "),t("p",[s._v("https的缺点：")]),s._v(" "),t("p",[s._v("1、每次push都需要输入口令非常麻烦，但windows也有自带的凭证管理器去记录我们的账户密码")]),s._v(" "),t("p",[s._v("SSH的优点：")]),s._v(" "),t("p",[s._v("1、架设git服务器时常用SSH协议作为传输协议，同时SSH协议也是一个验证授权的网络协议，非常的普遍而且架设使用都很容易")]),s._v(" "),t("p",[s._v("2、SSH协议在push的时候不需要输入用户名和密码")]),s._v(" "),t("p",[s._v("SSH的缺点：")]),s._v(" "),t("p",[s._v("1、SSH的服务器端一般使用22端口，企业防火墙可能没有打开这个端口。使用xshell工具连接linux系统开放的也是22端口")]),s._v(" "),t("p",[s._v("2、SSH 协议的缺点在于你不能通过他实现匿名访问。 即便只要读取数据，使用者也要有通过 SSH 访问你的主机的权限，这使得 SSH 协议不利于开源的项目。 如果你只在公司网络使用，SSH 协议可能是你唯一要用到的协议。 如果你要同时提供匿名只读访问和 SSH 协议，那么你除了为自己推送架设 SSH 服务以外，还得架设一个可以让其他人访问的服务。")]),s._v(" "),t("p",[s._v("总结：")]),s._v(" "),t("p",[s._v("https利于匿名访问，适合开源项目可以方便被别人克隆和读取(但他没有push权限)；毕竟为了克隆别人一个仓库学习一下你就要生成个ssh-key折腾一番还是比较麻烦，所以github除了支持ssh协议必然提供了https协议的支持。")]),s._v(" "),t("p",[s._v("而SSH协议使用公钥认证比较适合内部项目。 当然了现在的代码管理平台例如github、gitliab，两种协议都是支持的，基本上看自己喜好和需求来选择就可以了。")]),s._v(" "),t("p",[s._v("一般来说代码托管平台中如果有https就用它，没有的话在企业中就用ssh")]),s._v(" "),t("h1",{attrs:{id:"_25、ssh免密登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25、ssh免密登录"}},[s._v("#")]),s._v(" 25、ssh免密登录")]),s._v(" "),t("p",[s._v("Gitee 提供了基于SSH协议的Git服务，在使用SSH协议访问仓库仓库之前，需要先配置好账户/仓库的SSH公钥。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('在任何一个命令提示符中，生成ssh key（使用了rsa非对称加密算法）\nssh-keygen -t rsa -C "xxxxx@xxxxx.com"  \n\n注意：这里的 xxxxx@xxxxx.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。 现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("按照提示完成三次回车，即可生成 ssh key。通过查看 "),t("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 文件内容，获取到你的 public key")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("查看公钥\ncat ~/.ssh/id_rsa.pub\n\n查看私钥\ncat ~/.ssh/id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("复制生成后的 ssh key，通过gitee "),t("strong",[s._v("「设置」->「SSH公钥」->「添加部署公钥」")]),s._v(" ，添加生成的 public key 添加到仓库中。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("添加后，在终端（Terminal）中输入：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@gitee.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("首次使用需要确认并添加主机到本机SSH可信列表。若返回 "),t("code",[s._v("Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access.")]),s._v(" 内容，则证明添加成功。")]),s._v(" "),t("p",[s._v("添加成功后，就可以使用SSH协议对仓库进行操作了。")]),s._v(" "),t("h1",{attrs:{id:"_26、针对push到远程仓库的代码有误的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26、针对push到远程仓库的代码有误的情况"}},[s._v("#")]),s._v(" 26、针对push到远程仓库的代码有误的情况")]),s._v(" "),t("ol",[t("li",[s._v("如果出错的内容是提交在远程自己的 branch：只需要在本地把内容修正后，强制 push (push -f）一次就可以解决；")]),s._v(" "),t("li",[s._v("如果出错内容已经合并到master上：不要强制 push，而要用 git revert HEAD^把上一次写错的 commit 撤销。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);