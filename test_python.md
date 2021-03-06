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

## 20. 関数を定義2

- 前回の続き
- 前回の値を0にしたらどうなるか

  ```python
  >>> fib(0)

  >>> # 空白行が一行入ってなにも表示されない

  # 実際にはNone（ナン）が出力されている
  >>> print(fib(0))
  None
  ```

- リストに入れて返すプログラムにする

  ```python
  >>> def fib2(n):
  ...   """Return a list contining the Fibonacci series up to n."""
  ...   result = []
  ...   a, b = 0, 1
  ...   while a < n:
  ...      result.append(a) # プリントの代わり
  ...      a, b = b, a+b
  ...   return result
  ...
  >>> f100 = fib2(100)
  >>> f100
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  >>>
  ```

---

## 21. デフォルト引数値1

- 引数 デフォルトの値を指定する

  ```python
  >>> def ask_ok(prompt, retries=4, complaint='Yes or no, please!'): # 関数名ask_ok
  ...   while True:
  ...      ok = input(prompt)
  ...      if ok in ('y', 'ye', 'yes'):
  ...         return True
  ...      if ok in ('n', 'no', 'nop', 'nope'):
  ...         return False
  ...      retries = retries -1 # リトライ
  ...      if retries < 0:
  ...         raise OSError('uncooperative user')
  ...      print(complaint)
  ...
  >>> ask_ok('Do you really want to quit?') # 1番目の引数変えることができる
  ```

---

## 22. デフォルト引数値2

- 引数値には癖があるので気をつける

  ```python
  # 以下の場合、出力されるのは5か6か
  >>> i = 5
  >>>
  >>> def f(arg = i):
  ...   print(arg)
  ...
  >>> i = 6
  >>> f()
  5 # 関数が定義されたときにiの値は決まる
  ```

- リストやデータ型の場合、注意が必要

  ```python
  # どんどんデータが追加されてしまう
  >>> def f(a, L=[]): # デフォルト値は最初に定義されるだけ
  ...   L.append(a)
  ...   return L
  ...
  >>> print(f(1))
  [1]
  >>> print(f(2))
  [1, 2]
  ```

- 常に空リストとしてはじめたい

  ```python
  >>> def f(a, L=None): # 空リストではなくNoneを指定する
  ...   if L is None:
  ...      L = []
  ...   L.append(a)
  ...   return L
  >>> print(f(1))
  [1]
  >>> print(f(2))
  [2]
  ```

---

## 23. キーワード引数1

- キーワード引数の呼び出し方

  ```python
  # 引数、1つめはなにも指定がなく、2-4は文字を引数にしている
  >>> def parrot(voltage, state=' a stiff', action='voom', type='Norwegian Blue'):
  ...   print("-- This parrot wouldn't", action, end=' ')
  ...   print("if you put", voltage, "volts through it.")
  ...   print("-- Lovely plumage, the", type)
  ...   print("-- It's", state, "!")
  ...
  # 最初のvoltageに1000を入れる
  >>> parrot(1000)
  -- This parrot woundn't voom if you put 1000 volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's a stiff !

  # キーワードを指定して引数を設定できる
  >>> parrot(voltage=500) # さきほどと同じように指定できる
  -- This parrot woundn't voom if you put 500 volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's a stiff !

  # 他のキーワードについても指定できる（順番飛ばせる）
  >>> parrot(voltage=300, action='VOOOOM')
  -- This parrot woundn't VOOOOM if you put 300 volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's a stiff !

  # 順番逆にしても呼び出しできる
  >>> parrot(action='VOOOOOOOOM', voltage=100)
  -- This parrot woundn't VOOOOOOOOM if you put 100 volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's a stiff !

  # キーワードを指定しない場合は順番に
  >>> parrot('a million', 'bereft of life', 'jump')
  -- This parrot woundn't jump if you put a million volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's bereft of life !
  ```

---

## 24. キーワード引数2

- 順番に引数出すのと、キーワードで出すのを混在してもできる

  ```python
  >>> parrot('a thousand', state='pushing up the daisies')
  -- This parrot woundn't voom if you put a thousand volts through it. # 改行していないのはend=' 'が入っているから
  -- Lovely plumage, the Norwegian Blue
  -- It's oushing up the daisies !
  ```

- 正しくない（不正な）呼び出し例

  ```python
  # なにも値を渡さない→エラー
  >>> parrot()

  # voltageだけキーワードにして、次をキーワード入れない→エラー
  # 1つめにキーワード入れたらずっと書かないといけない
  >>> parrot(voltage=1000, 'dead')

  # キーワード使わずvoltageの値を指定したあとに、キーワード使ってvoltageを指定する→エラー
  >>> parrot(100, voltage=200)

  # キーワードを間違って指定→エラー
  >>> parrot(actor='John Clease')
  ```

---

## 25. キーワード引数3

```python
>>> def cheeseshop(kind, *arguments, **keywords):
...   print("-- Do you habe any", kind, "?")
...   print("-- I'm sorry, we're all out of", kind)
...   for arg in arguments:
...      print(arg)
...   print("-" * 40)
...   keys = sorted(keywords.keys()) # キーワードをソート
...   for kw in keys:
...      print(kw, ":", keywords[kw])
...
# キーワードを指定していない引数までが*arguments
# キーワードを指定している3つが**keywords
>>> cheeeseshop("Limburger", "It's very runny, sir."
...      "It's really bery, BERY runny, sir.",
...      shopkeeper="Michael Palin",
...      client="John Cleese"<
...      sketch="Cheese Shop Sketch")

-- Do you habe any Limburger ?
-- I'm sorry, we're all out of Limburger
It's very runny, sir.
It's really very, VERY runny, sir.
----------------------------------------
client : John Cleese
shopkeeper : Michael Palin
Sketch : Cheese Shop Sketch
>>>
```

---

## 26. 任意引数リスト

- アスタリスクが1つの引数について
- 任意引数、可変長引数、可変個引数と言う
- 引数の数を任意の数、可変で受け取ることができる引数

  ```python
  >>> def concat(*args, sep="/"): # 可変長はキーワードの前に
  ...   return sep.join(args) # sepという文字で接合
  ...
  >>> concat("earth", "mars", "venus")
  'earth/mars/venus'
  >>>
  >>> concat("earth", "mars", "venus", sep=".")
  'earth.mars.venus'

  # 普通の引数のあとに可変長にする
  >>> def write_multiple_items(file, separator, *args):
  ```

---

## 27. 引数リストをアンパック

- *のついた引数（引数リスト）のアンパック

  ```python
  >>> list(range(3, 6))
  [3, 4, 5]
  >>> args = [3, 6]

  # 以下だとエラーになる
  >>> list(range(args))

  # *をつけてアンパックするとうまくいく
  >>> list(range(*args))
  [3, 4, 5]
  ```

- **についても同じようなことができる
- キーワードと値、辞書のような形で値を入れることができる

  ```python
  # **をつけないと挙動がおかしくなる
  >>> def parrot(voltage, state='a stiff', action='voom'):
  ...   print("-- This parrot wouldn't", action, end=' ')
  ...   print("if you put", voltage, "volts through it.", end=' ')
  ...   print("E's", state, "!")
  ...
  >>> d = {"voltage": "four million", "state":"bleedin' demised", "action":"VOOM"}

  >>> parrot(d)
  -- This parrot wouldn't voom if you put {'voltage': 'four million', 'state': "bleedin' demised", 'action': 'VOOM'} volts through it. E's a stiff !

  >>> parrot(**d)
  -- This parrot wouldn't VOOM if you put four million volts through it. E's bleedin' demised !
  >>>
  ```

---

## 28. ラムダ式

- ラムダ（lambda）
- 関数を返す部分でラムダを利用する

  ```python
  >>> def make_incrementor(n):
  ...   return lambda x: x + n # 名前のない関数を作れる
  ...
  >>> f = make_incrementor(42)
  >>> f(0)
  42
  ```

- それ以外の利用方法

  ```python
  >>> pairs = [(1, 'one'), (2,'two'), (3, 'three'), (4, 'four')] # （）はタプル
  >>> pairs.sort(key=lambda pair: pair[1]) # 文字列のほうを使ってソートして
  >>> pairs
  [(4,'four'),  (1, 'one'), (3,'three'), (2, 'two')]
  >>>
  ```

---

## 29. ドキュメンテーション文字列

- 関数にドキュメンテーション文字列をつけることができる
- """ 3つ続けて書いて、開始、終了も"""
- ドキュメンテーションを兼ねることができる
- この関数の振る舞いどういうことなのか文章で示すことができる
- 関数定義の内側、下に書く

  ```python
  >>> def my_function():
  ...   """Do nothing, but document it.
  ...
  ...   No, really, it doesn't do anything
  ...   """
  ...   pass
  ...
  >>> print(my_function.__doc__) # 関数名と.__doc__で表示させることもできる
  do nothing, but document it.

     No, really, it doesn't do anything.

  >>>

---

## 30. 関数アノテーション

- annotation 注釈という意味
- Pythonは文字列なのか数値なのか型を書かない言語
- コメントのように型を書くことができる

  ```python
  >>> def f(ham: str, eggs: str = 'eggs') -> str:
  ...   print("Annotations:", f.__annotations__)
  ...   print("Arguments:", ham, eggs)
  ...   return ham + 'and' + eggs
  ...
  >>> f('spam')
  Annotations: {'return': <class 'str'>, 'ham': <class 'str'>, 'eggs': <class 'str'>}
  Arguments: spam eggs
  'spam and eggs'

  
  # 文字列ではなく数値を入れてもエラーにならない
  # 文字列と数値を結合としようとしたエラーは出た
  # 実行時にエラーで止めてくれるというようなものではない
  # 開発ツールで注意を促してくれるツールがあるのでそちらで
  >>> f(1)
  Annotations: {'return': <class 'str'>, 'ham': <class 'str'>, 'eggs': <class 'str'>}
  Arguments: 1 eggs # エラーにならない
  traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    File "<stdin>", line 4, in f
  TypeError: unsupported operand type(s) for +: 'int' and 'str' # 文字列と数値をくっつけようとしてるよのエラーは出る
  >>>
  ```

---

## 31. リスト

- リストのデータ構造について

  ```python
  # []で囲ってリストにすることができる
  >>> a = [66.25, 333,333, 1, 1234.5]
  >>> a
  [66.25, 333, 333, 1, 1234.5]

  # 数を数える count
  >>> a.count(333) # リストの中に333がいくつあるか
  2

  # 333と、66.25と文字列xがいくつあるか
  >>> print(a.count(333), a.count(66.25), a.count('x'))
  2 1 0
  >>>

  # 挿入する insert
  >>> a
  [66.25, 333, 333, 1, 1234.5]
  >>> a.insert(2, -1) # 0,1,2番目に-1を追加する
  >>> a
  [66.25, 333, -1, 333, 1, 1234.5]
  >>>

  # 削除する remove
  >>> a.remove(333) # 同じ値が複数あっても最初の1つだけ
  >>> a
  [66.25, -1, 333, 1, 1234.5]

  # 順番を逆にする reverse
  >>> a.reverse() # リストの中身そのものを並び替えてしまう
  >>> a
  [1234.5, 1, 333, -1, 66.25]

  # 小さい順に並べる sort
  >>> a.sort()
  >>> a
  [-1, 1, 66.25, 333, 1234.5]

  # 一番最後の値を取り出して取り除く pop
  >>> a.pop()
  >>> a
  1234.5
  >>> a
  [-1, 1, 66.25, 333]
  ```

---

## 32. スタックやキューとしてリストを使用

- スタックとは、「後入れ先出し」英語ではLIFO

  ```python
  # appendとpopを使ってデータをスタックする
  >>> stack = [3, 4, 5]
  >>> stack.append(6)
  >>> stack.append(7)
  >>> stack
  [3, 4, 5, 6, 7]
  >>> stack.pop()
  7
  >>> stack
  [3, 4, 5, 6]
  ```

- キューとは、「先入れ先出し」英語ではFIFO

  ```python
  >>> from collections import deque # 違う回で詳細説明する
  >>> queue = deque(["Eric", "John", "Michael"])
  >>> queue.append("Terry")
  >>> queue.append("Graham")
  >>> queue.popleft()
  'Eric'
  >>> queue
  deque(['Michael', 'Terry', 'Graham'])
  >>>

---

## 33. リスト内包表記1

リストを生成するコードを簡単に記述できる

- 普通に書いた場合

  ```python
  >>> squares = []
  >>> for x in range(10):
  ...   squares.append(x**2)
  ...
  >>> squares
  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
  >>>
  ```

- リスト内包表記で書いた場合

  ```python
  >>> squares = [x**2 for x in range(10)]
  >>> squares
  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
  >>>
  ```

---
