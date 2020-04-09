# プログラミング言語 Python3 入門

---

## 1. Pythonをインストール

- 以下記事を参考にUbuntu環境に入れてみた  
<https://www.sejuku.net/blog/83204>

- Version 3.7.7をインストールした

### 1-1. バージョン確認方法

- pythonのバージョンを確認する方法

  ```bash
  $python3 -version

  # Python 3.7.7（現在のバージョンが表示される）
  ```

---

## 2. Pythonを起動

### 2-1. ターミナルを起動

- Ubuntuでは「端末」左上の「アクティビティ」をクリックし、「検索」窓から「ターミナル」と入力すると「端末」が出てくる。  

- 以下使い分けて勉強を勧めていく
  - 端末：Pythonを動かす
  - VSCodeの中にあるターミナル：GitHubを動かす

### 2.2. Pythonを起動させる

- pythonとだけ入力すると古いバージョンが立ち上がるので気をつける

  ```bash
  $python3
  ```

---

## 3. 数値1

### 3-1. 四則演算

- 四則演算
  
  ```python
  >>> 2+2
  4 # 足し算

  >>> 50-5*6
  20 # カッコをつけなくても掛け算から計算してくれる

  >>> 50-5*6/4
  42.5 # 小数点もちゃんと出してくれる

  >>> (50-5*6)/4
  5.0 # カッコつけて計算もできる
  ```

### 3-2. 割り算（切り捨て）

- スラッシュを2つ書く「//」

  ```python
  >>> 17/3
  5.6666666667 # 普通に計算するとこうなる

  >>> 17//3
  5 # 切り捨てられた
  ```

### 3-3. 余りの計算

- 「/」ではなくて「%」

  ```python
  >>> 17%3
  2 # 余りが表示される
  ```

### 3-4. べき乗の計算

- 「**」のようにアスタリスクを2つ続けて記載する

  ```python
  >>> 5 ** 2
  25 # 5の二乗
  ```

### 3-5. 記載方法

- 演算子の前にスペースをあけてもいい。あけなくてもいい。
- 片方だけでも大丈夫
- みやすさを重視する
- どちらがいいというわけではない
  
  ```python
  >>> 17/3
  >>> 17 / 3
  >>> 17 /3
  ```

---

## 4. 数値 2

### 4-1. ターミナルを整理したい時

- 表示を一掃することができる  
    `command + k`

### 4-2. 変数・代入

- 例

  ```python
  >>> width = 20
  >>> height = 5*9
  >>> width * height
  900 # 20*5*9が計算される

  >>> width = 30
  >>> width * height
  1350 # 30*5*9が計算される

  ```

- 定義されていない変数（アルファベットなど）を入れるとエラーがでる

  ```python
  >>> n
  Tranceback(most recent call last): #エラーが出る
   File "<stadin>", line 1, in <module>
  NameError: name 'n' is not defined

  >>> width
  30 # さきほど代入した値が表示される
  ```

### 4-3. 整数・小数点の計算

- 整数と小数点をごちゃまぜにして計算も可能

  ```python
  >>> 3 * 3.75 / 1.5
  7.5 # 問題なく計算ができる
  ```

### 4-4. 対話モードだけで使える変数

- 「_（アンダースコア）」を入れると１つ前の出力を参照することができる
- 対話モードのときにしか使えない

  ```python
  >>> tax = 12.5 / 100
  >>> price = 10050
  >>> price * tax
  1256.25 # 10050 * 12.5 / 100が計算されている

  >>> price + _
  11306.25 # price + price * taxと同義、_で一つ前の計算を参照し足している
  ```

---

## 5. 文字列 1

### 5-1. 文字列の入力方法

- 文字列は以下どちらかで囲う
- 文字列の中にシングルクオートを使いたいときはダブルクオートを利用する
  - `（シングルクオート）
  - "（ダブルクオート）

  ```python
  >>> 'spam eggs'
  'spam eggs' # 文字列になった→これ初めてプログラミングする人わかるのか？

  >>> 'don't'
  File "<stadin>", line 1 # 構文エラーがでる
    'don't'
        ^
  SyntaxError: invalid syntax

  # 解決方法（ダブルクオートを使わないやりかた）
  # バックスラッシュのあとのシングルクオートだよという意味
  >>> 'don\'t'
  "don't"

  # "Yes, " he said. を文字列にしたい場合
  >>> '"Yes, " he said.'
  >>> "\"Yes, \" he said."

  # "Isn't, " she said. を文字列にしたい場合
  >>> '"Isn\'t, " she said.'
  >>> "\"Isn't, \" she said."
  ```

### 5-2. print関数

- プリント関数を利用すると文字列の一番外側のクオートがなくなってみやすくなる

  ```python
  >>> print('"Isn\'t, " she said.')
  "Isn\'t, " she said. # 一番外側のシングルクオートが外れる
  ```

### 5-3. \n

- \nと打つとprint関数を使ったときに改行される

  ```python
  >>> s = 'First line.\nSecond line.'
  >>> s
  'First line.\nSecond line.' # 変数がそのまま表示される

  >>> print(s)
  First line. # \nのところで改行が入って表示される
  Second line.
  ```

---

## 6. 文字列2

### 6-1. 文字列に\nがうっかり入っていて改行される場合

- 改行を意味せず、文字列として\nを利用したい

  ```python
  >>> print('C:\some\name')
  C:\some
  ame # 改行されておかしなことになってしまっている
  ```

- print(r)を使う

  ```python
  >>> print(r'C:\some\name')
  C:\some\name # そのまま文字列として使われる
  ```

### 6-2. 三連引用符（'''）

- 三連引用符を使うと入力したとおりの文字列を認識してくれる

  ```python
  #頭にprint('''、最後に''')でしめる
  >>> print('''
  >>> ... Usage:
  >>> ...   -h help
  >>> ... ''')

  Usage:
    -h help


  #バックスラッシュを使うと前後の改行が消える
  >>> print('''\
  >>> ... Usage:
  >>> ...   -h help
  >>> ... ''')
  Usage:
    -h help
  ```

### 6-3. 文字列の小技

- 文字列を掛けることができる

  ```python
  >>> 3 * 'un' + 'ium'
  'unununium' # unを3回繰り返している
  ```

- 文字列をつなげる
  文字列通しだと「+」いらないが、変数だと「+」がいるのでつねに「+」つけておくとよい

  ```python
  >>> 'Py' 'thon'
  'Python' # 文字列だと成立する

  >>> prefix = 'Py'
  >>> prefix 'thon'
  SyntaxError: invalid syntax # 関数と文字列はつなげられない

  # つなげたいときは「+」を使う
  >>> prefix + 'thon'
  'Python'

  # 文字列通しでも「+」使ってエラーでないのでデフォこうしたほうがよい
  >>> 'Py' + 'thon'
  'Python'

  # 「+」を使わない利点
  # 長い文章を結合させるとき

  >>> text = ('Put several strings within parenthese '
  >>> ...   'to have them joined together.')
  >>> text
  'Put several strings within parenthese to have them joined together.'
  ```

---

## 7. 文字列3

### 7-1. index

- 文字を1つずつ取り出すことができる

  ```python
  >>> word = 'Python'
  >>> word[0]
  'P' # 文字列の最初の文字 プログラミングは0から始まることが多い

  >>> word[5]
  'n'
  ```

- マイナスをつけると後側から

  ```python
  >>> word[-1]
  'n'
  ```

## 7-2. スライス

- 部分文字列を取得する

  ```python
  #'Python'から最初の2文字を取得したい
  >>> word[0:2]
  'Py' # 0番目を含み2番目を含まない

  # 以下に省略することもできる
  >>> word[:2]
  'Py' # 0番目を含み2番目を含まない

  # 反対側の省略も可能
  >>> word[2:]
  'thon' # 2番目から最後まで


  # 以下のようなことも可能
  word[2:5]
  'tho' # 2番目を含み5番目を含まない
  ```

- indexだと範囲外の数字を入れるとエラーが出る

  ```python
  >>> word[42]
  Traceback (most recent call last): # エラーがでる
    File "<stadin>", line 1, in <module>
  IndexError: string index out of range
  '''

- スライスはエラーでない

  ```python
  >>> word[4:42]
  'on' # 4番めから最後まで

  >>> word[42:]
  '' # 表示するものはないのでから文字が表示される
  ```

- Pythonの文字列は変更ができない

  ```python

  >>> word[0]
  'P'
  >>> word[0] = 'J' # Jに置き変えようとしてみる
  Traceback (most recent call last): # エラーがでる
    File "<stadin>", line 1, in <module>
  IndexError: string index out of range

  # 新しく文字列を作るしかない

  >>> 'J' + word[1:]
  'Jython'

  >>> word[:2] + 'py'
  'Pypy'
  '''

### 7-3. 文字列の長さをカウントする（len）

- 文字列の長さを計算する関数（エクセルなどと同じだ）

  ```python
  >>> s = 'ldskjfsldjflsdjflksdjlfks'
  >>> len(s)
  33 # 文字数を数えてくれる
  ```

---

## 8. リスト1

### 8-1. リストとは

- 複数の値をまとめリストとして持つことができる

  ```python
  # spuaresという変数に5つの数字（1,4,9,16,25）をもたせる
  >>> squares = [1, 4, 9, 16, 25]

  >>> squares
  [1, 4, 9, 16, 25] # 数字のリストは配列と呼ばれることもある
  ```

- リストの1つめの値を取得したい場合

  ```python
  >>> squares [0]
  1 # リストの中の1番め（0)を表示した
  ```

- 後ろから数えて表示させたい場合

  ```python
  >>> squares [-1]
  25 # リストの後ろから1番め（こっちは0関係ないのね）
  ```

- 前回のスライスのように範囲指定もできる

  ```python
  >>> squares [-3:]
  [9, 16, 25] # リストの後ろから3番目から最後まで
  ```

- 範囲指定をコロンだけにするとすべて表示される

  ```python
  >>> swuares [:]
  [1, 4, 9, 16, 25] # リスト全体をコピーして新しいリストを作成できる
  ```

- リストの内容を追加したい

  ```python
  >>> squares + [36, 49, 64, 81, 100]
  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

  # しかし変数打つと入っていない
  >>> swuares
  [1, 4, 9, 16, 25] # 追加した分が入っていない

  # 以下の書き方をすると内容が追加される
  >>> squares = squares + [36, 49, 64, 81, 100]
  
  >>> swuares
  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  ```

---

## 9. リスト2

- リストの内容を差し替える

   ```python
   >>> cubes = [1, 8, 27, 65, 125]
   >>> cubes
   [1, 8, 27, 65, 125]

   # 65を間違えてしまったので差し替えたい
   >>> cubes[3] = 64 # 3番めを64にする
   >>>

   # ちゃんと変更できているか確認する
   >>> cubes
   [1,8, 27, 64, 125] # 変更されている
   ```

- リストに内容を追加したい

  ```python
  >>> cubes.append(216) # 216を追加したい

   # ちゃんと追加できているか確認する
   >>> cubes
   [1,8, 27, 64, 125, 216] # 追加されている

   # 計算式で計算した結果を追加することもできる（式が入るわけじゃない）
   >>> cubes.append(7 ** 3) # 7の3乗した数字を追加したい

   # ちゃんと追加できているか確認する
   >>> cubes
   [1,8, 27, 64, 125, 216, 343] # 追加されている
  ```

---

## 10. リスト3

- 文字をリスト化する

  ```python
  >>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  
  # ちゃんとできているか確認する
  >>> letters
  ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  # 前から3番目から5番目の前まで表示させる
  >>> letters[2:5]
  ['c', 'd', 'e']

  # 上記の前から3番目から5番目の内容を大文字と入れ替える
  >>> letters[2:5] = ['C', 'D', 'E']

  # ちゃんとできているか確認する
  >>> letters
  ['a', 'b', 'C', 'D', 'E', 'f', 'g']
  ```

- リストから値を削除する

  ```python
  >>> letters[2:5] = [] # 前から3番目から5番目の内容を削除
  ['a', 'b', 'f', 'g']

  >>> letters[:] = [] # すべての値を削除
  []
  ```

- 文字列でもlen関数が使える

  ```python
  >>> len(letters) # リストの中の値の数を数えてくれる（文字の長さではない）
  0
  ```

- 入れ子（ネスト）にすることもできる

  ```python
  >>> a = ['a', 'b', 'c']
  >>> n = [1, 2, 3]
  >>> x = [a, n]

  # どうなっているか確認する
  >>> x
  [['a', 'b', 'c'], [1, 2, 3]]

  # xを使って、aの値を参照するとき
  >>> x[0]
  ['a', 'b', 'c']

  # xを使って、bの値を参照するとき
  >>> x[1]
  [1, 2, 3]

  # xを使って、aの2番目を参照するとき
  >>> x[0][1]
  'b'
  ```

---

## 11. while文とフィボナッチ数列

### 11-1. フィボナッチ数列とは

- 前の2つの値を足した値が次の値になる数列のこと
- Pythonで簡単にプログラムすることができる

  ```python
  >>> a, b = 0, 1
  >>> while b < 10:
  ...   print(b)
  ...   a, b = b, a+b
  ...
  1
  1
  2
  3
  5
  8
  ```

- print関数について

  ```python
  # 文字列と変数を組み合わせて表示させることもできる
  >>> i = 256 * 256
  >>> i
  65536

  >>> print('The value of i is', i)
  The value of i is 65536
  
  # カンマ区切りで表示させることもできる
  >>> a,b = 0, 1
  >>> while b < 1000:
  ...   print(b, end=',') # 改行する代わりにカンマで区切って
  ...   a, b = b, a+b
  ...
  1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,>>>
  ```

  ---

## 12. if文

### 12-1. while文おさらい

- 繰り返し実行するための構文

### 12-2. if文

- 一定の条件を満たしている場合のみ実行する
- 例：

  ```python
  # xにinputで入力された文字列をintで数字に変換し代入する
  >>> x = int(input("Please enter an integer: "))
  Please enter an integer:  # 入力を待っている状態

  # 42を入力する
  Please enter an integer: 42 # 42と入れる
  >>> if x < 0: # もし、xが0未満だった場合
  ...   x = 0
  ...   print('Negative changed to zero')
  ... elif x == 0: # ifが満たされずxが0だった場合
  ...   print('Zero')
  ... elif x == 1:　# 上記が満たされずxが1だった場合
  ...   print('Single')
  ... else: # 上記以外
  ...   print('More')
  ... # なにも打たずに改行する
  More # 42なので、elseが適用された
  >>>
  ```

---

## 13. 条件式

- Pythonの条件式は柔軟

  ```python
  >>> a = 1
  >>> b = 2
  >>> c = 3
  >>>
  >>> a < b # 1 < 2
  True # 正しいのでTrue

  >>> a > b # 1 > 2
  False # 正しくないのでFalse

  >>> a == b # 1 == 2
  False # 正しくないのでFalse
  ```

- 組み合わせた条件式

  ```python
  >>> a < b < c # 1 < 2 < 3 # つなげて書くことができる
  True # 正しいのでTrue

  # andでつなげてかける
  >>> a < b and b >c # 1 < 2 かつ 2 > 3
  Falde # どちらも正しくないとだめ、正しくないのでFalse

  # orもできる
  >>> a < b or b < c # 1 < 2 もしくは 2 < 3
  True # どちらかが正しければおっけい、正しいのでTrue
  ```

- 否定（not）
  
  ```python
  >>> not a < b # 1 < 2ではない
  False # 結果を反転させる
  ```

---

## 14. for文

- while文と似た繰り返し処理を行う構文
- for inという書き方をする

  ```python
  >>> words = ['cat', 'window', 'defenestrate']
  >>> for w in words: # wordsというリストの単語一つをwに入れる
  ...   print(w, len(w)) # 単語と単語の文字数を出力
  ...
  cat 3
  window 6
  defenestrate 12

  # リストの内容を変更するような場合は以下
  >>> for w in words[:]: # wordsというリストの単語一つをwに入れる
  ```

---

## 15. range関数

- ただ5回繰り返すというような場合はrange関数が便利

  ```python
  >>> for i in range(5): # 5回繰り返す
  ...   print(i)
  ...
  0
  1
  2
  3
  4
  >>>
  ```

- 開始する数字、終了する数字の指定も簡単にできる

  ```python
  >>> for i in range(5, 10): # 5から10を含まない数字まで
  ...   print(i)
  ...
  5
  6
  7
  8
  9
  >>>
  ```

- 増加量の指定

  ```python
  >>> for i in range(0, 10, 3): # 0から3ずつ増加して10を含まない数字まで
  ...   print(i)
  ...
  0
  3
  6
  9
  >>>

  # マイナスについても同じように
  >>> for i in range(-10, -100, -30): # -10から30ずつ減らして-100を含まない数字まで
  ...   print(i)
  ...
  -10
  -40
  -70
  >>>
  ```

- rangeを使うと簡単にリストを作成できる

   ```python
  # 数字が大きくなったら関数で作ったほうが早い
  >>> list(range(5))
  [0,1,2,3,4]
  >>>
  ```

---

## 16. break文とループでのelse文

- 繰り返し処理を途中でやめたい場合に使う
- breakのほかに、continue，elseもある

  ```python
  >>> for n in range(2, 10): # 2から9までを順番にnに入れる
  ...   for x in range(2, n): # 2からnまでを順番にxに入れる
  ...      if n % x == 0: # もし、nをxで割って余りが0ならば、
  ...         print(n, 'equals', x, '*', n//x) # 素数じゃない出力
  ...         break # for xに戻る
  ...   else: # 余りが出たならば
  ...      print(n, 'is a prime number') # 素数だよ出力
  ...
  2 is a prime number
  3 is a prime number
  4 equals 2 * 2
  5 is a prime number
  6 equals 2 * 3
  7 is a prime number
  8 equals 2 * 4
  9 equals 3 * 3
  >>>
  ```

---

## 17. continue文

```python
>>> for num in range(2, 10):
...   if num % 2 == 0:
...      print("Found an even number", num)
...      continue # ここがブレイクだと終わってしまう
...   print("Found a number", num)
...
>>>
Found a number 2
Found a number 3
Found an even number 4
Found an even number 5
Found a number 6
Found a number 7
Found an even number 8
Found an even number 9
```

---

## 18. pass文

- 何もしないことを明示的に記述する
- 実装を忘れているわけではなく意図的になにもない

  ```python
  >>> class MyEmptyClass:
  ...   pass
  ...

  >>> def initlog(*args):
  ...   pass
  ...
  >>>
  ```

---

## 19. 関数を定義1

- defを使う

  ```python
  >>> def fib(n):
  ...   """Print a Fibonacci series up to n."""
  ...   a, b = 0, 1
  ...   while a < n:
  ...      print(a, end=' ')
  ...      a, b = b, a+b
  ...   print()
  ...
  >>> fib(2000) # 2000までの値で出力して
  0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
  >>>
  ```

- 関数を別の関数に代入する

  ```python
  >>> f = fib
  >>> f(2000)
  0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
  >>>
  ```

---
