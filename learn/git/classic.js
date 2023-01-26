/*
practice https://learngitbranching.js.org/?locale=ru_RU

Репозиторий:
	git fetch - стягивает все коммиты
	git pull - сразу fetch + merge (или добавить флаг --rebase для fast fetch + rebase)

Слияния/перемещение:
	git merge comm - простое слияние веток
	git rebase - более чистая ветка, создаёт новый коммит и откидывает дополнительную ветку 
	git rebase -i позволит выбрать что делать с коммитами оставить(omit)/удалить(pick)/объединить - git rebase -i HEAD~4)
	git rebase --onto всю часть ветки > git rebase --onto main commit)
	
	ex: git rebase main* commit
	git cherry-pick C1 C3 - перемещение необходимых коммитов в нашу ветку

Путешествие:
	git branch -f main COMMIT(HEAD~1) - принудительно переместить
	git checkout COMMIT(HEAD^)

	^ - выбор родителя
	~ - переход по количеству (head~2 -- с5* -> c3) 
	ex: git checkout head~^2~2

Отмена:
	git reset HEAD~1 - перезаписывает-откатывает/стирает изменения на коммит до ***для локальных
	( + --soft для сохранения данных)
	git revert COMMIT - создаёт дополнительный коммит по верх прошлого с изменениями ***для групповых работ
	(-n возможность перезаписать коммит)
	ДОП:
		git reset --soft HEAD~1 - отмена с сохранение данных
		git commit --amend дополнение последнего коммита
		git push -f - перезапишет последний коммит ***в команде нужно быть осторожным

Полезно:
	git tav v0 bugFix - дополнительное обозначения
	git branch bugFix HEAD~^2~ - удалённое создание ветки без логов

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
	
	3. Перенос веток (+ с разветвлением)
		git rebase main bugFix
		git rebase bugFix feature1
		git rebase feature1 feature2
		git rebase feature2 main*

	4. Из 1 общей ветки сделать 3 сохранив фичи это ветки для разных по необходимости
		git branch -f three c2 
		git checkout one
		git cherry-pick c4 c3 c2 
		git checkout two
		git cherry-pick c5 c4' c3' c2'
*/