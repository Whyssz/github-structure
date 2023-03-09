/*
practice https://learngitbranching.js.org/?locale=ru_RU

Репозиторий: 
	git fetch - стягивает все коммиты
		git fetch origin foo - стягивает коммиты ветки (origin foo:bar - в ветку бар) 
		git fetch origin :feature1 - добавит локально и репозиторий ветку

	git pull - сразу fetch + merge (--rebase для fast fetch + rebase)
		git pull origin main~:feature - стягивает коммиты и o/main~ в ветку foo
		git push origin :feature2 - удалит ветку локально и из репозитория

	git push origin feature - push на удалённый репозиторий только определенного коммита
		git push origin main^:foo - запушить определённые изменения (создать несуществующую ветку в реп если ещё не было до этого пуша)
		git push origin :feature - помещает ничего в ветку (удаляет её локально и удалённо, также работает и с fetch, но создаёт ветку)

	git reset HEAD~1 - перезаписывает-откатывает/стирает изменения на коммит до ***для локальных
	( + --soft для сохранения данных)

	git revert COMMIT - создаёт дополнительный коммит по верх прошлого с изменениями ***для групповых работ
	(-n возможность перезаписать коммит)

	git merge comm - простое слияние веток

	git rebase - более чистая ветка, создаёт новый коммит и откидывает дополнительную ветку 
		git rebase -i позволит выбрать что делать с коммитами оставить(omit)/удалить(pick)/объединить - git rebase -i HEAD~4)
			ex bugFix*: git rebase -i main 
		git rebase --onto всю часть ветки (git rebase --onto main commit)
		ex: git rebase main* commit

	git reset --soft HEAD~1 - отмена с сохранение данных

	git cherry-pick C1 C3 - перемещение необходимых коммитов в нашу ветку

	git commit --amend дополнение последнего коммита

ДОП:
	git branch -f main COMMIT(HEAD~1) - принудительно переместить коммит (как при rebase)

	git checkout COMMIT(HEAD^) -b name commit
		^ - выбор родителя
		~ - переход по количеству (head~2 -- с5* -> c3) 
		ex: git checkout head~^2~2

	git push -f - перезапишет последний коммит ***в команде нужно быть осторожным

	git tav v0 bugFix - дополнительное обозначения

	git branch bugFix HEAD~^2~ - удалённое создание ветки без логов
		git branch -u o/main feature - устанавливает слежку за feature

Дополнительные возможности: https://habr.com/ru/company/vk/blog/267595/
	git branch -a - поиск и удаление старых веток	
	git stash name (или git stash -p) - откладывание изменения файлов
*/

/* EX:
	1. Есть ветка с двумя коммитами, необходимо сделать её копию и изменить в ней первый коммит, объединить ветку с main и восстановить последовательность
		git rebase -i HEAD~2
		git commit --amend
		git rebase -i HEAD~2 (на это этапе ветка отсеется)
		git branch -f main HEAD

	2. Выдернуть определённый коммит, внести в него изменения и объединить с main добавив другой коммит
		git checkout main 
		git cherry-pick c2 
		git commit --amend (ветка с выдернутым коммитом отбросится)
		git cherry-pick c3
	
	3. Перенос веток (+ с разветвлением) (продвинутый 1)
		git rebase main bugFix (main <- bugFix)
		git rebase bugFix feature1
		git rebase feature1 feature2
		git rebase feature2 main*

	4. Из 1 общей ветки сделать 3 сохранив фичи это ветки для разных по необходимости (продвинутый 3)
		git branch -f three c2 
		git checkout one
		git cherry-pick c4 c3 c2 
		git checkout two
		git cherry-pick c5 c4' c3' c2'

	5. Откатить главную ветку на 1 коммит выше, оставив изменения/фичу на этом комите, запушить всё основной репозиторий (push & pull - 8)
		git reset --soft main HEAD~ (git branch -f main HEAD~)
		git checkout -b commit feature
		git push
	
	6. Есть 3 отдельные фичи, необходимо запушить их в репозиторий
		git fetch (если нет необходимости стягивать дополнительные ветки git pull *--rebase)
		git rebase o/main side1 (origin main <- side1)
		git rebase side1 side2
		git rebase side2 side3
		git rebase side3 main
		git push

	7. Запушить только изменения feature2 в репозиторий (как новую ветку, до этого пуша не было), а изменения из feature1 как продолжение o/main (origin 5)
		git push origin main^:feature2 (коммит родитель пушится как ветка)
		git push origin feature3:main
*/

