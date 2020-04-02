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
