# Git Commit Message Convention

> This is adapted from [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular).

## TL;DR

消息必须由以下正则表达式匹配:

```js
/^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip): .{1,50}/;
```

### Examples

出现在 "Features" 标题下的副标题 `dev`:

```bash
feat(dev): add 'comments' option
```

出现在 "Bug Fixes" 标题下的副标题 `dev`，带有问题 #28 的链接:

```bash
fix(dev): fix dev error

close #28
```

出现在 "Performance Improvements" 标题下，并在 "Breaking Changes" 下显示重大变更说明:

```bash
perf(build): remove 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

以下提交和提交 `667ecc1` 如果在同一版本下，则不会出现在变更日志中。如果不是，还原提交将出​​现在 "Reverts" 标题下:

```bash
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 完整消息格式

提交消息由 **header**、**body** 和 **footer** 组成。**header** 有 **type**、**scope** 和 **subject**:

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**header** 是强制性的而 **scope** 是可选的

### Revert

如果提交还原了先前的提交，它应该以 `revert:` 开头，后面跟上还原的标头。在 `<body>` 中应该这样说明：`This reverts commit <hash>.`，其中哈希是要还原的提交的 SHA

### Type

如果前缀是 `feat`、`fix` 或 `perf`，它将出现在变更日志中。但是，如果有任何 [BREAKING CHANGE](#footer)，提交将始终出现在变更日志中

其他前缀由您自行决定。对于与变更日志无关的任务，建议的前缀是 `docs`、`chore`、`style`、`refactor` 和 `test`

### Scope

范围可以是指定提交更改位置的任何内容 `dev`、`build`、`workflow`、`cli` 等

### Subject

主题包含对更改的简洁描述:

- 使用祈使句、现在时：“change” 而不是 “changed” 或 “changes”
- 不要大写第一个字母
- 末尾没有点(`.`)

### Body

“change” 同 **Subject** 正文应包括改变的动机，并将其与以前的行为进行对比

### Footer

The footer should contain any information about and is also the place to reference GitHub issues that this commit **Closes**. 页脚应包含有关 **Breaking Changes** 的任何信息，也是引用此提交 **Closes** for GitHub issues 的地方

**Breaking Changes** 应以 `BREAKING CHANGE:` 开头并带有空格或两个换行符，然后将提交消息的其余部分用于此
