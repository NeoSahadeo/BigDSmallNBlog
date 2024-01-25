---
title: "Learning to resolve Git Merges #1"
date: "23-01-2024"
author: "Neo Sahadeo"
description: "I learn how to resolve git merge conflicts"
categories: ["learning", "life experience", "git", "spam", "self development"]
---

<img src="https://images.pexels.com/photos/18101577/pexels-photo-18101577/free-photo-of-sculpture-from-jedi-temple-dok-ondars-den-of-antiquities-in-disneyland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style="object-fit: cover; width: 100%; height: 40rem; object-position: top">

## A backstory

I, a young Git Padawan Jedi Master and possibly Yoda himself, finally got down and dirty with Git Merging (EW!). And to be frank (I'm not frank, I'm Neo btw), it was really fun.

## Reading through the Git Docs

Oh boy, I don't like reading docs but... well there is not but, I just don't like reading docs.
Feel free to have a quick squiz [Git Merge](https://git-scm.com/docs/git-merge).

After the first read-through, everything just made more sense.

## Attempting a Merge

I created a GitHub repo. Push up a few small data changes and then edited the files on GitHub itself. Then I changed the local repo to create a merge conflict.

### Creating the Merge Conflict

I run a Git fetch and merge.

<br/>

> Quick Side Note:
>
> ```
> gitk --all
> ```
>
> Git has this command that displays Git commit trees.

<br>

After running the commands I get a merge conflict. Then I run the Git mergetool and it makes merging super easy.

## Conclusion

Git mergetool is very cool and I learnt a lot.
