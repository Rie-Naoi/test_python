# test_python

Udemyの講座が、あまり関数の構文などの説明がないので
progateも導入
今後役に立ちそうな情報だけ、まとめていく

---

## 01. 目標物を確認

Pythonは

- シンプルで英語に近い
- 理解しやすいプログラミング言語
- Webアプリケーション開発や機械学習、統計処理などに使われている
- GoogleやFacebookなどのIT企業でも採用されている

---

## 02. 文字列

### 02-01. 文字列とは

プログラミングの世界では文字は「文字列」と呼ばれる。

- 文字列は囲む必要がある
  - シングルクォーテーション「'」
  - ダブルクォーテーション「"」

#### 入力例（文字列）

- 入力例1：出力結果は一緒
  - 入力

    ```python
    >>> print('Hello Python')
    ```

  - 出力

    ```console
    Hello Python
    ```

- 入力例2：出力結果は一緒
  - 入力
  
    ```python
    >>> print("Hello Python")
    ```

  - 出力

    ```console
    Hello Python
    ```

- 入力例3：エラーが出る
  - 入力

    ```python
    >>> print(Hello Python)
    ```

---

### 02-02. コメント

コード内にコメントを書くことができる。

- 行頭に「#」を書く
- 行末までコメントとみなされる
- コード実行時にコメントは無視される
- コードに関するメモなど残しておくことができる

#### 入力例（コメント）

- 入力

  ```python
  # この行はコメントです
  >>> print('Hello Python')

  # print('こんにちは、Python')
  ```

- 出力
  「#」からはじまる行は出力されていない

  ```console
  Hello Python
  ```

---

## 03. 数値

### 03-01. 数値とは

- 数値は文字列と違ってクォーテーションで囲む必要なし
- 「+」、「-」を用いて足し算引き算が可能
- 数値や記号はすべて半角で記述する
- 記号の前後に半角スペースを入れるとコードが見やすくなる

#### 入力例（数値）

- 入力例1
  - 入力

    ```python
    >>> print(3)
    ```

  - 出力

    ```console
    3
    ```

- 入力例2：足し算

  - 入力

    ```python
    >>> print(3 + 7)
    ```

  - 出力

    ```console
    10
    ```

- 入力例3：引き算
  - 入力

    ```python
    >>> print(7 - 3)
    ```

  - 出力

    ```console
    4
    ```

---

### 03-02. 文字列と数値の違い

- 数値をクォーテーションで囲むと文字列として解釈され計算されずそのまま出力される

#### 入力例（文字列と数値の違い）

- 入力例1：数値の場合（数値の足し算の結果を出力）
  - 入力
  
    ```python
    >>> print(3 + 5)
    ```
  
  - 出力

    ```console
    8
    ```

- 入力例2：文字列の場合（3 + 5という文字列を出力）
  - 入力

    ```python
    >>> print('3 + 5')
    ```
  
  - 出力

    ```console
    3 + 5
    ```

---

### 03-03. その他の計算

- 掛け算：「*」
- 割り算：「/」
- 割り算の余り：「%」

#### 入力例（その他の計算）

- 入力例1：掛け算
  - 入力

    ```python
    >>> print(3 * 7)
    ```

  - 出力

    ```console
    21
    ```

- 入力例2：割り算（小数点も出力される）
  - 入力

    ```python
    >>> print(3 / 2)
    ```

  - 出力

    ```console
    1.5
    ```

- 入力例3：割り算の余り（7割る3は、2余り1の「1」を出力)
  - 入力

    ```python
    >>> print(7 % 3)
    ```
  
  - 出力

    ```console
    1
    ```

---

## 04. 変数

### 04-01. 変数とは

- データ（値）を入れておく箱のようなもの
- この箱（変数）に名前（変数名）をつけることで変数に値を入れたり、取り出したりできる

---

### 04-02. 変数の定義

- 変数は「変数名 = 値」で定義する
- 変数名はクォーテーションで囲む必要なし
- 「=」は、「等しい」ではなく「右辺を左辺に代入する」という意味
- 特に定義した際、出力はされない

#### 入力例（変数の定義）

- 入力例1：文字列（nameという変数名にjohnという値を代入）
  - 入力

    ```python
    >>> name = 'john'
    ```
  
- 入力例2：数値（numberという変数名に24を代入）
  - 入力

    ```python
    >>> number = 24
    ```

---

### 04-03. 変数の値を取り出してみる

- print(name)すると変数nameの値を出力できる
- print('name')にするとnameとそのまま出てしまう

#### 入力例（変数の値を取り出してみる）

- 入力例1：正しく変数が取り出せている
  - 入力

    ```python
    >>> name = 'john'
    >>> print(name)
    ```

  - 出力

    ```console
    john
    ```

- 入力例2：正しく取り出せていない（name)
  変数の値ではなく「name」という文字列が出力されている
  - 入力

    ```python
    >>> name = 'john'
    >>> print('name')
    ```
  
  - 出力

    ```console
    name
    ```

---

## 05. 変数を使ってみよう

### 05-01. 変数名の付け方

変数名は自由につけられるがルールがある

- 良い例
  - 英単語を用いる
  - 2語以上の場合はアンダーバーで区切る
  - 例：
    - date
    - user_name
- 悪い例
  - 数字開始
  - ローマ字
  - 日本語
  - 例：
    - 1name
    - namae
    - 名前

---

### 05-02. 変数を使う意義(1)

変数を使うメリット

- データに名前をつけることで扱っているデータの中身が何を表しているか明確になる
- コードが読みやすくなる

#### 入力例（変数を使う意義（1））

- 変数を使用した場合
  変数名が何を表しているかわかりやすい
  - 入力

    ```python
    >>> apple_count = 3
    >>> apple_price = 100
    >>> total_price = apple_count * apple_price
    >>> print(total_price)
    ```
  
  - 出力

    ```console
    300
    ```

- 変数名を使用しない場合
  値が何を表しているかわかりにくい
  - 入力

    ```python
    >>> total_price = 3 * 100
    >>> print(total_price)
    ```
  
  - 出力

    ```console
    300
    ```

---

### 05-03. 変数を使う意義（2）

変数を使うと他にも以下メリットがある

- 同じデータを繰り返し利用することができる
- 変数の値に変更が必要になった場合、変更する箇所が1箇所で済む

#### 入力例（変数を使う意義（2））

- 変数を使用した場合
  同じデータを繰り返し使える
  - 入力

    ```python
    # 正方形の面積を計算
    >>> length = 5
    >>> area = length * length
    >>> print(area)
    ```
  
  - 出力

    ```console
    25
    ```

- 変数を使用しない場合
  変更が複数ヶ所必要になる
  - 入力

    ```python
    # 正方形の面積を計算
    >>> area = 5 * 5
    >>> print(area)
    ```

  - 出力

    ```console
    25
    ```

---

## 06. 変数の値を更新してみよう

### 06-01. 変数の値を更新する（1）

「変数名 = 新しい値」で変数の値を上書きできる

#### 入力例（変数の値を更新する（1））

- 入力1

  ```python
  # 変数xを定義
  >>> x = 5
  >>> print(x)
  ```

- 出力1

  ```console
  5
  ```

- 入力2

  ```python
  # 変数xに11を代入し、値を上書き
  >>> x = 11
  >>> print(x)
  ```

- 出力2

  ```console
  5
  ```

---

### 06-02. 変数の値を更新する（2）

- 変数自身に数値を足したものを再び同じ変数に代入する
- 「=」は「代入」の意味、「等しい」ではない
- 引き算も同様
  
#### 入力例（変数の値を更新する（2））

- 入力1

  ```python
  # 変数xを定義
  >>> x = 5
  >>> print(x)
  ```

- 出力1

  ```console
  5
  ```

- 入力2

  ```python
  # xに「5 + 3」を代入し直す
  >>> x = x + 3
  >>> print(x)
  ```

- 出力2

  ```console
  8
  ```

---

### 06-03. 変数の値を更新する（3）

図のように省略することもできる

| 基本形 | 省略形 |
| :---- | :---- |
| x = x + 10 | x += 10 |
| x = x - 10 | x -= 10 |
| x = x * 10 | x *= 10 |
| x = x / 10 | x /= 10 |
| x = x % 10 | x %= 10 |

---

## 07. 文字列の連結

### 07-01. 文字列の連結とは

「+」記号は計算以外にも以下のことができる

- 文字列の連結
- 変数と文字列の連結
- 変数同士の連結

#### 入力例（文字列の連結）

- 入力例1：文字列同士を連結
  - 入力

    ```python
    >>> print('Hello' + 'Python')
    ```
  
  - 出力

    ```console
    Hello Python
    ```

- 入力例2：文字列と文字列が入った変数の連結

  - 入力

    ```python
    >>> name = 'john'
    >>> print('My name is' + name)
    ```

  - 出力

    ```console
    My name is john
    ```

---

## 08. データ型

### 08-01. データ型とは

- 「文字列」や「数値」などは「データ型」と呼ばれる
- さまざまなデータの種類がある
- 例：

  | 値の種類 | データ型 |
  | :---- | :---- |
  | 'Hello Python' | 文字列型 |
  | 3 | 数値型 |

---

### 08-02. データ型の違い

- データ型が異なるとコードは異なる動作をする

#### 入力例（データ型の違い）

- 入力例1：数値の計算
  - 入力

    ```python
    >>> print(5 + 7)
    ```
  
  - 出力

    ```console
    12
    ```

- 入力例2：文字列の連結
  - 入力

    ```python
    >>> print('5' + '7')
    ```
  
  - 出力

    ```console
    57
    ```

---

### 08-03. 型変換（数値→文字列）str

- データ型の異なる文字列型と数値型を連結するとエラーになる
- 数値型を文字列型に変換すると、文字列同士の連結として扱われて連結できるようになる
- データ型を変えることを「型変換」という
- 数値型を文字列型に変換するには「str」を使う

#### 入力例（型変換（数値→文字列）str）

- 入力例1：エラー（異なる型同士の連結はできない）
  - 入力

    ```python
    >>> price = 100
    >>> print('りんごの価格は' + price + '円です')
    ```

- 入力例2：文字列型同士なので連結できる
  - 入力

    ```python
    >>> price = 100
    >>> print('りんごの価格は' + str(price) + '円です')
    ```

  - 出力

    ```consol
    りんごの価格は100円です
    ```

---

### 08-04. 型変換（文字列→数値）int

先とは逆に文字列型を数値型に変換したい時は「int」を使う

#### 入力例（型変換（文字列→数値）int）

- 入力（countを文字列から数値に変換）

  ```python
  >>> count = '3'
  >>> price = 100
  >>> total_price = price * int(count)
  >>> print(total_price)
  ```

- 出力

  ```console
  300
  ```

---

## 09. if文

### 09-01. 条件分岐とは

「テストの点数（条件）によって成績（処理）を変える」
というようなものが条件分岐です。

---

### 09-02. if文

- if文を使うと「もし○○ならば」という条件分岐が可能になる
- ifの後に条件式を指定し、その条件が成り立つときに実行する処理を次の行に書く

#### 入力例（if文）

- 入力

  ```python
  >>> score = 100
  >>> if score == 100:
  ...    print('よくできました')
  >>>
  ```

- 出力

  ```console
  よくできました
  ```

---

### 09-03. if文の条件式

- 条件式の中では2つの値を比較するための記号「比較演算子」がよく使われる
  - x == y ：左右の値が等しい時成り立つ
  - x != y ：左右の値が等しくない時成り立つ
- if文の条件部分は「if 条件式:」のように書く

#### 入力例（if文の条件式）

- 入力（条件式scoreが100の時に成り立つ）

  ```python
  >>> score = 100
  >>>if score == 100:
  ```

---

### 09-04. インデント

- if文の条件式が成立した時の処理はインデント（字下げ）する
- インデントは半角スペース4つ分
- 処理がif分の中にあるかどうかはインデントによって判別される
- コードの見た目（インデント）がそのままプログラムの動作に影響するので入力気をつける

#### 入力例（インデント）

- 入力例1：条件式が成り立たない（なにも出力されない）
  - 入力

    ```python
    >>> score = 50
    >>> if score ==100:
    ...    print('よくできました！')
    ...    print('次も頑張りましょう')
    ```

- 入力例2：インデントがないため、if文の外とみなされる
  - 入力

    ```python
    >>> score = 50
    >>> if score == 100
    ...    print('よくできました！')
    ... print('次も頑張りましょう')
    ```
  
  - 出力

    ```console
    次も頑張りましょう
    ```

---

## 10. 真偽値

### 10-01. 真偽値とは

- 「真偽値型」には2種類
  - 「True」
  - 「False」
- 成り立つときは「True」
- 成り立たないときは「False」
- それぞれの頭文字は大文字
  
#### 入力例（真偽値とは）

- 入力例1：Trueをかえす
  - 入力

    ```python
    >>> print(3 == 3)
    ```
  
  - 出力

    ```console
    True
    ```

- 入力例2：Falseをかえす
  - 入力

    ```python
    >>> print(3 == 5)
    ```
  
  - 出力

    ```console
    False
    ```

---

### 10-02. if文と真偽値

if文では条件式がTrueのときには処理が実行され、
Falseのときには処理が実行されない

#### 入力例（if文と真偽値）

- 入力例1：条件式がTrueになって実行された
  - 入力

    ```python
    >>> score = 100
    >>> if score == 100:
    ...    print('よくできました！')
    ```

  - 出力

    ```console
    よくできました！
    ```

- 入力例2：条件式がFalseになって実行されない
  - 入力

    ```python
    >>> score = 50
    >>> if score == 100:
    ...    print('よくできました！')
    ```

---

### 10-03. 比較演算子

- 比較演算子には、「==」、「!=」以外にもある
- <>の大小比較の記号

| 比較演算子 | 意味 | 真偽 |
| :---- | :---- | :---- |
| x < y | xがyより小さい時 | True |
| x <= y | xがyより小さいまたは等しい時 | True |
| x > y | xがyより大きい時 | True |
| x >= y | xがyより大きいまたは等しい時 | True |

#### 入力例（比較演算子）

| 計算式 | 真偽 |
| :---- | :---- |
| 2 > 6 | False |
| 4 + 2 >= 6 | True |
| 8 / 4 < 5 | True |
| 2 * 5 <= 9 | False |

### 10-04. 比較演算子まとめ

- 等しいか調べる

  | 比較演算子 | 意味 | 真偽 |
  | :---- | :---- | :---- |
  | == | 右辺と左辺が等しいとき | True |
  | != | 等しくないとき | True |

- 大小を比べる

  | 比較演算子 | 意味 | 真偽 |
  | :---- | :---- | :---- |
  | < | 右辺の方が大きい時 | True |
  | <= | 右辺の方が大きいまたは等しい時 | True |
  | > | 右辺の方が小さい時 | True |
  | >= | 右辺の方が小さいまたは等しい時 | True |

---

## 11. else

### 11-01. 条件に合致しない時の処理

- if文に「else」を組み合わせることで「もし、○○ならば××を行う、そうでなければ△△を行う」という条件分岐ができるようになる
- if文の条件がFalseのとき、elseの処理が実行される

#### 入力例（条件に合致しない時の処理）

- 入力

  ```python
  >>> score = 50
  >>> if score == 100:
  ...    print('よくできました！')
  ...else:
  ...    print('頑張りましょう')
  ```

- 出力

  ```console
  頑張りましょう
  ```

---

## 12. elif

### 12-01. elifとは（1）

- if文で条件が成り立たなかった場合を複数定義したい場合、「elif」を使う
- 「もし、○○ならば××、△△ならば▲▲、そうでなければ□□」というような処理ができる

#### 入力例（elifとは（1））

- 入力

  ```python
  >>> score = 70
  >>> if score == 100:
  ...    print('よくできました！')
  ...elif score >= 60:
  ...    print('まずまずです')
  ...else:
  ...    print('頑張りましょう')
  ```

- 出力

  ```console
  まずまずです
  ```

---

### 12-02. elifとは（2）

- 上から順に条件が成り立つか判断される
- 最初に条件に合致した部分の処理だけが行われる

#### 入力例（elifとは（2））

- 入力（最初の条件式が成立したのでそれ以降の処理は実行されない）

  ```python
  >>> score = 100
  >>> if score == 100:
  ...    print('よくできました！')
  ...elif score >= 60:
  ...    print('まずまずです')
  ...else:
  ...    print('頑張りましょう')
  ```

- 出力（まずまずですは実行されない）

  ```console
  よくできました！
  ```

---

## 13. 条件式を組み合わせる

### 13-01. and

- 「条件1も2も成り立つ」というような場合の条件式は「and」を使う
- 「条件1 and 条件2」のように書く
- 「and」を用いて複数の条件式を組み合わせると全ての条件式が「True」の場合に全体が「True」になる
- 例：
  | 論理演算子 - and | |
  | :---- | :---- |
  | True and True | True |
  | True and False | False |
  | False and True | False |
  | False and False | False |

#### 入力例（and）

- 入力

  ```python
  >>> time = 14
  >>> if time > 10 and time < 18:
  ...    print('就業時間です')
  ```

- 出力

  ```console
  就業時間です
  ```

---

### 13-02. or

- 「条件1か2が成り立つ」というような場合の条件式は「or」を用いる
- 「条件1 or 条件2」のように書く
- 複数の条件式のうち1つでもTrueであれば全体がTrueになる
- 例：
  | 論理演算子 - or | |
  | :---- | :---- |
  | True and True | True |
  | True and False | True |
  | False and True | True |
  | False and False | False |

#### 入力例（or)

- 入力

  ```python
  >>> time = 15
  >>> if time == 10 or time == 15:
  ...    print('おやつの時間です')
  ```

- 出力

  ```console
  おやつの時間です
  ```

---

### 13-03. not

- 「not」を用いると条件の否定ができる
- 「not 条件式」のようにする
- 条件式が「True」であれば全体が「False」に、「False」であれば「True」になる

#### 入力例（not)

- 入力

  ```python
  >>> time = 9
  >>> if not time == 18:
  ...    print('退社時刻ではありません')
  ```

- 出力

  ```console
  退社時刻ではありません
  ```

---

## 14. 代金を計算する

- いままで学んだ内容を組み合わせして簡単なプログラムを作る
- コンソールにりんごの個数を入力、個別に応じた処理内容を出力させる

### 演習（代金を計算する）

- 入力

  ```python
  # apple_priceという変数に数値200を代入
  >>> apple_price = 200

  # countという変数に数値5を代入
  >>> count = 5

  # total_priceという変数に、apple_priceとcountをかけたものを代入
  >>> total_price = apple_price * count

  # 「購入するりんごの個数は○○個です」と出力
  >>> print('購入するりんごの個数は' + str(count) + '個です')

  # 「支払い金額は○○円です」となるように出力
  >>> print('支払い金額は' + str(total_price) + '円です')
  ```

- 出力

  ```console
  購入するりんごの個数は5個です
  支払い金額は1000円です
  ```

---

## 15. 入力を受け取る

- 購入するりんごの個数を自由に決められるようにする

### 15-01. 入力を受け取る

- 「input」を用いる
- コードを実行した際にコンソールに文字を入力できるようになる
- 入力された値を受け取ることができる
- 「変数 = input('コンソールに表示したい文字列')のように使う

#### 入力例（入力を受け取る）

- 入力

  ```python
  >>> input_count = input('購入するりんごの個数を入力してください：')

  # 前回のコードを参照
  
  >>> print('購入するりんごの個数は' + input_count + '個です')
  ```

- 出力（3は画面の指示どおり入力）

  ```console
  購入するりんごの個数を入力してください：3
  購入するりんごの個数は3個です
  ```

---

### 15-02. 入力した値の型変換

- inputでコンソールに入力された値を受け取ると文字列型になっている
- 数値として扱いたい場合は型変換を使ってint型に変換させる

#### 入力例（入力した値の型変換）

- 入力

  ```python
  >>> apple_price = 200
  >>> input_count = input('購入するりんごの個数を入力してください：')
  >>> count = int(input_count)
  >>> total_price = apple_price * count

  # 前回のコードのため省略

  >>> print('支払い金額は' + str(total_price) + '円です')
  ```

- 出力（3は画面の指示どおり入力）

  ```console
  購入するりんごの個数を入力してください：3
  購入するりんごの個数は3個です
  支払い金額は600円です
  ```

---

## 16. 条件分岐をしよう

- 最後に条件分岐を使って必要な処理を追加する

### 演習（条件分岐をしよう）

- 入力

  ```python
  >>> apple_price = 200

  # 変数moneyに数値1000を代入
  >>> money = 1000

  >>> input_count = input('購入するりんごの個数を入力してください：')
  >>> count = int(input_count)
  >>> total_price = apple_price * count

  >>> print('購入するりんごの個数は' + str(count) + '個です')
  >>> pring('支払い金額は' + str(total_price) + '円です')

  # moneyとtotal_priceの比較結果によって条件を分岐
  >>> if money > total_price:
  ...    print('りんごを' + str(count) + '個買いました')
  ...    print('残金は' + str(money - total_price) + '円です')
  ... elif money == total_price:
  ...    print('りんごを' + str(count) + '個買いました')
  ...    print('財布が空になりました')
  ... else:
  ...    print('お金が足りません')
  ...    print('りんごを買えませんでした')
  ```

---

## 17. 目標物を確認しよう

- 演習の解き方についても復習

---

## 18. リスト

### 18-01. 複数のデータを扱う

- 食べ物の名前が複数ある時など
- それぞれ個別に変数として定義しておくより「食べ物の名前一覧」といったように関連するデータをまとめて管理すると便利なときがある

---

### 18-02. リスト

- 複数のデータをまとめて管理するには「リスト」を用いる
- リストは[要素1, 要素2]のように作成する
- リストに入っているそれぞれの値を「要素」と呼ぶ
- リストを使うと、複数の文字列や複数の数値を1つのものとして管理することができる

#### リストの作り方

カンマで要素を区切る　[要素1, 要素2, 要素3]

- 入力例：
  - 文字列のリスト
    - ['pasta', 'curry', 'sushi']
  - 数値のリスト
    - [1, 2, 3, 4, 5, 6, 7, 8, 9]
  - 文字列と数値のリスト
    - ['apple', 'banana', 200, 300]

---

### 18-03. リストを変数に代入する

- リストも1つの値なので変数に代入することができる
- リストを代入する変数名は慣習上複数形にすることが多い

#### 例（リストを変数に代入する）

- 入力

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> print(foods)
  ```

- 出力（リストがそのまま出力される）

  ```console
  ['pasta', 'curry', 'sushi']
  ```

---

### 18-04. リストの要素を取得する

- リストの要素には前から順に「0,1,2,...」と数字が割り振られている
- インデックス番号という
- インデックス番号は0から始まる
- リストの各要素は、リスト[インデックス番号]で取得できる

#### 例（リストの要素を取得する）

- 入力

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> print('好きな食べ物は' + foods[2] + 'です')
  ```

- 出力（インデックス番号2のsushiが出力）

  ```console
  好きな食べ物はsuhiです
  ```

---

## 19. リストの要素の更新・追加

### 19-01. リストの要素を更新しよう

- 「リスト[インデックス番号] = 値」
- リストの指定したインデックス番号の要素を更新できる

#### 例（リストの要素を更新しよう）

- 入力（インデックス番号1をpizzaに変更）

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> foods[1] = 'pizza'
  >>> print(foods)
  ```

- 出力

  ```console
  ['pasta', 'pizza', 'sushi']
  ```

---

### 19-02. リストに要素を追加しよう

- リストに新しい要素を追加することもできる
- 「リスト.append(値)」
- すでに定義されているリストの末尾に新たな要素を追加できる

#### 例（リストに要素を追加しよう）

- 入力（リストの末尾にpizzaを追加）

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> foods.append('pizza')
  >>> print(foods)
  ```

- 出力

  ```console
  ['pasta', 'curry', 'sushi', 'pizza']
  ```

---

> 無料プランが終了　ここから課金した

## 20. for文

### 20-01. リストの要素を全て取得する

- リストの要素すべてを出力したいとき、for文があると簡単にできる

#### 例（リストの要素を全て取得する）

- 入力（要素を1つずつ出力するのは面倒）

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> print('好きな食べ物は' + foods[0] + 'です]
  >>> print('好きな食べ物は' + foods[1] + 'です]
  >>> print('好きな食べ物は' + foods[2] + 'です]
  ```

- 出力

  ```console
  好きな食べ物はpastaです
  好きな食べ物はcurryです
  好きな食べ物はsushiです
  ```

---

### 20-02. for文の書き方

- 「for 変数名 in リスト:」
- リストの要素の数だけ、処理を繰り返すことができる

#### 例（for文の書き方）

- 入力

  ```python
  >>> foods = ['pasta', 'curry', 'sushi']
  >>> for food in foods:
  ...    print('好きな食べ物は' + food + 'です')
  ```

- 出力

  ```console
  好きな食べ物はpastaです
  好きな食べ物はcurryです
  好きな食べ物はsushiです
  ```

---

### 20-03. for文の処理の流れ

- 「for 変数名 in リスト:」とすると、リストの要素が先頭から順に1つずつ入っていき、その上でfor文の中の処理が実行される
- 処理はリストの要素の数だけ繰り返し行われる
- 変数名は自由
- リスト名の単数形にすることが慣習上多い

#### for文の処理の流れ

1. 変数foodに'pasta'が代入される
    for文の中身の処理が実行される

2. 変数foodに'curry'が代入される
    for文の中身の処理が実行される

3. 変数foodに'sushi'が代入される
    for文の中身の処理が実行される

---

## 21. 辞書

### 21-01. 辞書とは

- リストと同じように複数のデータをまとめて管理するのに用いられる
- リストとの違い：個々の要素をインデックス番号ではなくキーと呼ばれる名前をつけて管理する点
- 辞書ではキーと値のペアが1つの要素となる

---

### 21-02. 辞書の作り方

- 辞書は(キー1:値1, キー2:値2, ...)
- ほとんどの場合、キーには文字列が使われる
- リストは要素を[]で囲んだが、辞書は{}で囲む
- キーと値の間はコロン（:）
- 要素同士の間はコンマ（,）で区切る

#### 入力例（辞書の作り方）

- 入力（fruitsが変数名、appleがキー、redが値）

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow', 'grape':'purple'}
  ```

---

### 21-03. 辞書の要素の順番

- 辞書を出力してみると要素の順番が定義したときと変わっている
- 辞書内の要素には順序がないことに気をつけること

#### 例（辞書の要素の順番）

- 入力

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow', 'grape':'purple'}
  print(fruits)
  ```

- 出力（定義したときと順番が異なる）

  ```console
  {'banana':'yellow', 'apple':'red', 'grape':'purple'}

---

### 21-04. 辞書の要素の取り出し方

- 辞書の値を取り出すには、取り出したい値に対応する「キー」を用いて辞書名[キー]のように書く

#### 例（辞書の要素の取り出し方）

- 入力（キー名を用いて値を取り出す）

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow', 'grape':'purple'}
  >>> print('appleの色は' + fruits['apple'] + 'です')

- 出力

  ```console
  appleの色はredです
  ```

---

## 22. 辞書の要素の更新・追加

### 22-01. 辞書の要素を更新する

- 辞書はリストと同じように更新と追加することができる
- 辞書名[キー名] = 値で要素の更新ができる

#### 例（辞書の要素を更新する）

- 入力

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow', 'grape':'purple'}
  >>> fruits['apple'] = 'green'
  >>> print('appleの色は' + fruits['apple'] + 'です）
  ```

- 出力（キー名がappleである要素の値が更新された）

  ```console
  appleの色はgreenです
  ```

---

### 22-02. 辞書に要素を追加する

- 「辞書名[新しいキー名] = 値
- 辞書に新しい要素を追加できる
- 辞書にすでにあるキー名を指定してしまうと値の追加ではなく更新になってしまうので注意する

#### 例（辞書に要素を追加する）

- 入力（キー名がpeachである要素の値を追加）

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow'}
  >>> fruits['peach'] = 'pink'
  >>> print(fruits)
  ```

- 出力

  ```console
  {'peach':'pink', 'banana':'yellow', 'apple':'red'}
  ```

---

## 23. for文(2)

### 23-01. 辞書の要素を全て取得する

- 辞書もfor文を用いて要素を1つずつ取り出して処理することができる
- 「for 変数名 in 辞書:」
- 定義された変数にそれぞれの要素のキーが1つずつ代入される
- 要素の値はキーが代入された変数を用いて取り出せる

#### 例（辞書の要素を全て取得する）

- 入力

  ```python
  >>> fruits = {'apple':'red', 'banana':'yellow', 'grape':'purple'}
  >>> for fruit_key in fruits:
  ...    print(fruits_key + 'の色は' + fruits[fruits_key] + 'です')
  ```

- 出力

  ```console
  appleの色はredです
  bananaの色はyellowです
  grapeの色はpurpleです
  ```

---

## 24. while文

- 繰り返し処理にはfor文以外にもwhile文がある
- while文を用いると、「ある条件に当てはまる間、処理を繰り返す」といったことが可能

### 24-01. while文の書き方

- 「while 条件式:」のように書く
- 条件式の結果がTrueの間、while文内の処理を繰り返す

#### 例（while文の書き方）

- 入力（条件式がTrueの間、インデントの部分が繰り返される）

```python
>>> x = 1
>>> while x <= 100:
...    print(x)
...    x += 1
```

### 24-02. while文の処理の流れ

- while文の前で変数を定義する
- この変数をwhile文の条件式で用い、処理を繰り返すか判断する
- while文内の処理が一周終わると、その度に変数が更新され、再び条件式がチェックされる
- Trueであればもう一週処理を行う
- Falseであれば繰り返しを終了する

#### 例（while文の処理の流れ）

- 入力（条件式で使う変数xを定義し、繰り返すたびに1増えていく）

  ```python
  >>> x = 1
  >>> while x <= 100:
  ...    print(x)
  ...    x += 1
  ```

  | xの値 | x <= 100 | 実行する処理 |
  | :---- | :---- | :---- |
  | 1 | True | print(x)<br>x += 1 |
  | 2 | True | print(x)<br>x += 1 |
  | ... | True | print(x)<br>x += 1 |
  | 100 | True | print(x)<br>x += 1 |
  | 101 | False | 条件式がFalseになったので繰り返し処理を終了 |

---

### 24-03. 無限ループ（1）

- while文で処理の最後に変数の値を更新し忘れると、無限に処理が行われてしまう
- 無限ループはコンピュータに異常な負荷をかける
- 必ずどこかで条件がFalseになるように実装すること

#### 例（無限ループ（1））

- 入力（xの値が更新されていない）

  ```python
  >>> x = 1
  >>> while x <= 100:
  ...    print(x)
  ```

---

### 24-04. 無限ループ（2）

- 変数の値を更新する処理を記述する際にインデントを忘れると無限ループになってしまう
- インデントには気をつけること

#### 例（無限ループ（2））

- 入力

  ```python
  >>> x = 1
  >>> while x <= 100:
  ...    print(x)
  ... x += 1
  ```

---

## 25. break

- 繰り返し処理を強制的に終了する方法
- breakを用いると繰り返し処理を終了することができる
- if文などの条件分岐と組み合わせて使う
- while文でも同じように使うことができる

### 例（break）

- 入力

  ```python
  >>> numbers = [1, 2, 3, 4, 5, 6]
  >>> for number in numbers:
  ...    print(number)
  ...    if number == 3:
  ...        break
  ```

- 出力

  ```console
  1
  2
  3
  ```

---

## 26. continue

- 繰り返し処理を終了するbreakと違い、continueはその周の処理だけスキップすることができる
- continueもif文などと組み合わせて利用します
- while文でも同じように使うことができる

### 例（continue）

- 入力（numberが2で割り切れるとき、その周の繰り返しをスキップ）

  ```python
  >>> numbers = [1, 2, 3, 4, 5, 6]
  >>> for number in numbers:
  ...    if number % 2 == 0:
  ...        continue
  ...    print(number)
  ```

- 出力

  ```console
  1
  3
  5
  ```

---

## 27. 商品を用意しよう

### 27-01. お買い物プログラムを作ろう

- いままで学んだことを組み合わせてお買い物代金を計算するプログラムを作る
- コンソールに果物を購入する個数を入力し、個数に応じた処理内容を出力させる

---

### 27-02. 商品を用意する

- 購入することができる果物
- 果物の値段が要素として入った辞書を用意する
- 繰り返し処理を用いてそれぞれの値段を出力する

#### 演習（商品を用意する）

- 入力

  ````python
  # 文字列のキーと数値の値を持つ辞書を作って、変数itemsに代入
  >>> items = {'apple':100, 'banana':200, 'orange':400}
  
  # for文を用いて、辞書itemsのキーを1つずつ取り出していく繰り返し処理を作成
  >>> for item_name in items:

  # 「------------------------」を出力
  ...    print('------------------------')

  # 「○○は1個▲▲円です」となるように出力
  ...    print(item_name + 'は1個' + str(items[item_name]) + '円です')
  ```

---

## 28. 商品を購入しよう

- 繰り返し処理を用いて果物を順番に購入できるようにする
- 購入する個数の入力はinputを用いる
- 入力した個数と、支払い金額を順に出力する

### 演習（商品を購入しよう）

- 入力

  ```python
  >>> items = {'apple': 100, 'banana': 200, 'orange': 400}
  >>> for item_name in items:
  ...    print('------------------------')
  ...    print(item_name + 'は1個' + str(items[item_name]) + '円です')

  # inputを用いて入力を受け取り、変数input_countに代入
  >>> input_count = input('購入する' + item_name + 'の個数を入力してください：')

  # キーと変数input_countを用いて「購入する○○の個数は△△個です」となるよう出力
  >>> print('購入する' + item_name + 'の個数は' + input_count + '個です')

  # input_countを数値として変数countに代入
  >>> count = int(input_count)

  # 変数total_priceに果物1個の値段と変数countを掛けた値を代入
  >>> total_price = items[item_name] * count

  # 変数total_priceと型変換を用いて、「支払い金額は○○円です」と出力
  >>> print('支払い金額は' + str(total_price) + '円です')
  ```

---

## 29. 条件分岐をしよう（2）

- 所持金と購入代金を用いて条件分岐を作る

### 演習（条件分岐をしよう（2））

- 入力

  ```python
  # 変数moneyに数値1000を代入してください
  >>> money = 1000

  >>> items = {'apple': 100, 'banana': 200, 'orange': 400}
  >>>for item_name in items:
  ...    print('------------------------')

         # 変数moneyを用いて「財布には○○円入っています」のように出力
  ...    print('財布には' + str(money) + '円入っています')

  ...    print(item_name + 'は1個' + str(items[item_name]) + '円です')

  ...    input_count = input('購入する' + item_name + 'の個数を入力してください：')
  ...    print('購入する' + item_name + 'の個数は' + input_count + '個です')

  ...    count = int(input_count)
  ...    total_price = items[item_name] * count
  ...    print('支払い金額は' + str(total_price) + '円です')

         # moneyとtotal_priceの比較結果によって条件を分岐
  ...    if money >= total_price:
  ...        print(item_name + 'を' + str(count) + '個買いました')
  ...        money -= total_price
  ...    else:
  ...        print('お金が足りません')
  ...        print(item_name + 'を買えませんでした')
  ```

---

## 30. 残金を計算しよう

- 最後にお買い物が終わったあとの処理を書く
- 途中で所持金がなくなったらお買い物を終了させる

### 演習（残金を計算しよう）

- 入力

  ```python
  >>> money = 1000
  >>> items = {'apple': 100, 'banana': 200, 'orange': 400}
  >>> for item_name in items:
  ...    print('------------------------')
  ...    print('財布には' + str(money) + '円入っています')
  ...    print(item_name + 'は1個' + str(items[item_name]) + '円です')

  ...    input_count = input('購入する' + item_name + 'の個数を入力してください：')
  ...    print('購入する' + item_name + 'の個数は' + input_count + '個です')

  ...    count = int(input_count)
  ...    total_price = items[item_name] * count
  ...    print('支払い金額は' + str(total_price) + '円です')

  ...    if money >= total_price:
  ...        print(item_name + 'を' + str(count) + '個買いました')
  ...        money -= total_price

             # if文を用いてmoneyの値が0のときの条件を分岐
  ...        if money == 0:
  ...            print('財布が空になりました')
  ...            break

  ...    else:
  ...        print('お金が足りません')
  ...        print(item_name + 'を買えませんでした')

  # 変数moneyと型変換を用いて、「残金は○○円です」となるように出力
  >>> print('残金は' + str(money) + '円です')
  ```

---

## 31. 目標物を確認する

- 実際に開発をする際に必須となる関数やモジュールについて学ぶ
- じゃんけんゲームを作成する

---

## 32. 関数

### 32-01. 関数とは

- 関数とは、ある処理をまとめたプログラムの塊
- printも関数のひとつ

---

### 32-02. 関数について

- printの他にもいくつかの便利な関数が用意されている
- 関数は自分で作ることもできる
- 組み合わせることでプログラムを効率的に作ることができる

---

### 32-03. 関数を作ってみよう

- 関数は「def 関数名():」のように定義する
- 関数の処理の内容は、インデントして書く

#### 例（関数を作ってみよう）

- 入力

  ```python
  >>> def hello():
  ...    print('Hello World')
  ```

---

### 32-04. 関数の使い方

- 関数は定義しただけでは実行されない
- 呼び出して実行する
- 関数名()のように()をつけて呼び出しする
- ただし関数は定義した後でしか呼び出せない

#### 例（関数の使い方）

- 入力

  ```python
  >>> def hello():
  ...    print('Hello World')
  ...
  >>> hello()
  ```

- 出力

  ```console
  Hello World
  ```

---

## 33. 引数

### 33-01. 引数とは

- 関数を呼び出す際に、関数に値を渡すことができる
- この値のことを「引数」と言う
- 引数を渡すと関数野中でその値を利用することができるようになる
- 関数に引数を渡せると、その値によって関数の処理結果を変えることができるので便利
  
---

### 33-02. 引数を受け取る関数

- 関数に引数を渡すには、引数を受け取れる関数を定義しなければならない
- 関数の定義部分で、引数を受け取るための箱となる変数（仮引数）を指定する

#### 例（引数を受け取る関数）

- 入力（nameが仮引数）

  ```python
  >>> def hello(name):
  ...    print('Hello ' + name)
  ```

---

### 33-03. 関数に引数を渡す

- 関数に引数を渡すには、関数名（引数）として関数を呼び出す
- 渡された引数は、関数の仮引数に代入される
- その値を関数の処理の中で用いることができる

#### 例（関数に引数を渡す）

- 入力1

  ```python
  >>> def hello(name):
  ...    print('Hello ' + name)
  ...
  >>> hello('John')
  ```

- 出力1

  ```console
  Hello John
  ```

- 入力2：関数に渡した引数によって出力内容が変化

  ```python
  >>> hello('Kate')
  ```

- 出力2

  ```console
  Hello Kate
  ```

---

### 33-04. スコープ

- 変数には、その変数が使える範囲が存在する
- その範囲のことを「スコープ」と呼ぶ
- 仮引数や関数の中で定義した変数のスコープは関数の中だけ
- その変数を関数の外で使うことはできない

#### 例（スコープ）

- 入力（変数nameはインデントの外では使えないのでエラーがでる）

  ```python
  >>> def hello(name):
  ...    print(name)
  ...
  >>> pring(name)
  ```

---

## 34. 複数の引数

### 35-01. 複数の引数を持つ関数

- 引数は複数渡すこともできる
- 仮引数をコンマ（,）で区切って定義する
- 引数を受け取る順番は自由に決めることができる
- 引数は左から、「第1引数、第2引数...」と呼ぶ

#### 例（複数の引数を持つ関数）

- 入力

  ```python
  >>> def hello(name, message):
  ...    print(name + 'さん' + message)
  ```

---

### 35-02. 関数に複数の引数を渡す

- 引数の順番は、対応する仮引数の順番と同じにする必要がある

#### 例（関数に複数の引数を渡す）

- 入力（引数は仮引数と同じ順番で渡す）

  ```python
  >>> def hello(name, message):
  ...    print(name + 'さん、' + message)
  ...
  >>> hello('John', 'こんにちは')
  ```

- 出力

  ```console
  Johnさん、こんにちは
  ```

---

## 35. 引数の初期値

- 引数には初期値を設定することもできる
- 引数が省略されたとき、初期値が与えられていれば代わり値として初期値が使われる

### 例（引数の初期値）

- 入力1

  ```python
  >>> def hello(name, message='こんにちは')
  ...    print(name + 'さん、' + message)
  ...
  >>> hello('john', 'こんばんは')
  ```

- 出力1

  ```console
  johnさん、こんばんは
  ```

- 入力2（messageが省略されたので初期値が用いられている）

  ```python
  >>> hello('kate')
  ```

- 出力2

  ```console
  Kateさん、こんにちは
  ```

---

## 36. 名前を受け取ろう

### 36-01. じゃんけんをしよう

- 今までに作った関数を使って、入力に応じた処理ができるようにする

---

### 36-02. 名前を受け取ろう

- 名前を受け取って表示できるようにする

#### 演習（名前を受け取ろう）

- 入力

  ```python
  >>> def print_hand(hand, name='ゲスト'):
  ...    print(name + 'は' + hand + 'を出しました')

  >>> print('じゃんけんをはじめます')

  # inputを用いて入力を受け取り、変数player_nameに代入
  >>> player_name = input('名前を入力してください：')

  # 変数player_nameの値によって関数print_handの呼び出し方を変更
  >>> if player_name == '':
  ...    print_hand('グー')
  ...else:
  ...    print_hand('グー', player_name)
  ```

---

## 37. 出す手を選べるようにしよう

### 37-01. 手を選べるようにしよう

- グー、チョキ、パーを要素とするリストを用意する
- それぞれの要素のインデックス番号に対応する数字を入力することでどの手を出すか選べるようにする

#### 例（手を選べるようにしよう）

- 入力（0がグー、1がチョキ、2がパー）

  ```python
  >>> def print_hand(hand):
  ...    hands = ['グー', 'チョキ', 'パー']
  ...    print(hands[hand] + 'を出しました')
  ```

#### 演習（手を選べるようにしよう）

- 入力

  ```python
  >>> def print_hand(hand, name = 'ゲスト'):
         # 変数handsに、複数の文字列を要素に持つリストを代入
  ...    hands = ['グー', 'チョキ', 'パー']

         # リストhandsを用いて、選択した手が出力
  ...    print(name + 'は' + hands[hand] + 'を出しました')

  >>> print('じゃんけんをはじめます')
  >>> player_name = input('名前を入力してください：')

  # 「何を出しますか？（0: グー, 1: チョキ, 2: パー）'」と出力
  >>> print('何を出しますか？（0: グー, 1: チョキ, 2: パー）')

  # inputを用いて入力を受け取り、数値に型変換してから変数player_handに代入
  >>> player_hand = int(input('数字で入力してください：'))

  >>> if player_name == '':
         # 第1引数を変数player_handに書き換え
  ...    print_hand(player_hand)
  >>> else:
         # 第1引数を変数player_handに書き換え
  ...    print_hand(player_hand, player_name)
  ```

---

## 38. 戻り値

### 38-01. 入力値が正しいか判別しよう

- 入力した値が0, 1, 2以外の数字だった場合はエラーになる
- 入力された値が正しい数値かどうか判別する関数を作る
- 関数の結果によって処理をかえる

---

### 38-02. 戻り値とは

- 関数の処理結果を関数の呼び出し元で使いたい場合は関数が戻り値を返すようにする
- 「3 + 7は？」と入れたら10が戻る、10が戻り値

---

### 38-03. 戻り値のある関数

- 戻り値を呼び出し元に返すには関数の中で「return」を使う
- 「return 戻り値」と書くことで戻り地を呼び出し元に返し、活用可能

#### 例

- 入力

  ```python
  >>> def add(a, b):
  ...    return a + b
  ```

---

### 38-04. 戻り値を受け取ろう

- 戻り値がある場合、関数の呼び出す部分がそのまま値に置き換わる
- 関数の呼び出し部分を変数に代入することができる

#### 例（戻り値を受け取ろう）

- 入力（1 + 3の結果を呼び出し元に返す）

  ```python
  >>> def add(a, b):
  ...    return a + b
  ... sum = add(1, 3)
  ... print(sum)
  ```

- 出力

  ```console
  4
  ```

#### 演習（戻り値）

- 入力

  ```python
  # 関数validateを定義する
  >>> def validate(hand):

         # handの値によって条件分岐
  ...    if hand < 0 or hand > 2:
  ...        return True
  ...    else:
  ...        return False

  >>> def print_hand(hand, name='ゲスト'):
  ...    hands = ['グー', 'チョキ', 'パー']
  ...    print(name + 'は' + hands[hand] + 'を出しました')

  >>> print('何を出しますか？(0: グー, 1: チョキ, 2: パー）')
  >>> player_hand = int(input('数字で入力してください：'))

  # 関数validateの戻り値がTrueの場合、以下のif elseが実行されるようにする

  >>> if validate(player_hand):
  ...    if player_name == '':
  ...        print_hand(player_hand)
  ...    else:
  ...        print_hand(player_hand, player_name)
  ```

---

## 39. returnの性質

- returnは戻り値を呼び出し元に返すだけではなく、関数内の処理を終了させる性質も持っている
- return以降の関数の処理が実行されることはない

### 例（returnの性質）

- 入力（return以降の処理「Hello World」は実行されない）

```python
>>> def add(a, b):
...    return a + b
...    print('Hello World')
>>> sum = add(1, 3)
>>> print(sum)
```

- 出力

```console
4
```

---

### 39-01. 複数のreturn

- 条件分岐と組み合わせると複数のreturnを用いることができる

#### 例（複数のreturn)

- 入力

```python
>>> def hello(name = 'ゲスト'):
...    if name == 'ゲスト':
...        return '名前を教えてください'
...    return name + 'さん、ようこそ！'
>>> print(hello())
```

- 出力

```console
名前を教えてください
```

---

## 40. じゃんけんゲームを作ろう

- じゃんけんゲームを完成させていく
- コンピューターとじゃんけんし、勝敗を判定できるようにする
- 完成させていく過程でモジュールについても学習する

### 40-01. じゃんけんをしよう

#### 演習（じゃんけんをしよう）

```python
>>> def validate(hand):
...    if hand < 0 or hand > 2:
...        return False
...    return True

>>> def print_hand(hand, 'ゲスト'):
...    hands =['グー', 'チョキ', 'パー']
...    print(name + 'は' + hands[hand] + 'を出しました')

>>> print('じゃんけんをはじめます')
>>> player_name = input('名前を入力してください：')
>>> print('何を出しますか？（0: グー, 1: チョキ, 2: パー)')
>>> player_hand = int(input('数字で入力してください：'))

>>> if validate(player_hand):
# 変数computer_handに数値1を代入
...    computer_hand = 1

...    if player_name == '':
...        print_hand(player_hand)
...    else:
...        print_hand(player_hand, player_name)

# 第1引数をcomputer_hand、第2引数を文字列「コンピューター」として関数print_handを呼び出す
...    print_hand(compuer_hand, 'コンピューター')

... else:
...    print('正しい数値を入力してください')
```

---

## 41. じゃんけんの結果を判定しよう

- じゃんけんの結果を判定する関数を作る

### 演習（じゃんけんの結果を判定しよう）

- 入力

```python
>>> def validate(hand):
...    if hand < 0 or hand > 2:
...        return False
...    return True

>>> def print_hand(hand, name='ゲスト'):
...    hands = ['グー', 'チョキ', 'パー']
...    print(name + 'は' + hands[hand] + 'を出しました')

# 関数judgeを定義してください
>>> def jugge(player, computer):

# playerとcomputerの比較結果によって条件を分岐
...    if player == computer :
...        return '引き分け'
...    elif player == 0 and computer == 1:
...        return '勝ち'
...    elif player == 1 and computer == 2:
...        return '勝ち'
...    elif player == 2 and computer == 0:
...        return '勝ち'
...    else:
...        return '負け'

>>> print('じゃんけんをはじめます')
>>> player_name = input('名前を入力してください：')
>>> print('何を出しますか？（0: グー, 1: チョキ, 2: パー)')
>>> player_hand = int(input('数字で入力してください：'))

>>> if validate(player_hand):
...    computer_hand = 1
...    if player_name == '':
...        print_hand(player_hand)
...    else:
...        print_hand(player_hand, player_name)
...    print_hand(computer_hand, 'コンピューター')

# 変数resultに関数judgeの戻り値を代入
>>>    result = judge(player_hand, computer_hand)

# 変数resultを出力
>>>    print('結果は' + result + 'でした')

>>> else:
...    print('正しい数値を入力してください')
```

---

## 42. モジュールを使おう

### 42-01. コードを分けよう

- コードが増えて長くなってくるとわかりづらくなる
- 予期しないバグを引き起こしやすくなる
- コードを分ける方法を学ぶ

---

### 42-02. モジュール

- モジュールとはpythonのコードが書かれたファイルのこと
- 別ファイルをモジュールとして読み込む
- 関数の定義部分を別ファイルにうつすなど

---

### 42-03. import

- importを使うことでモジュールを読み込みできる
- モジュールを読み込んで使いたいファイルに「import モジュール名」と書くことで読み込みできる
- モジュール名はファイル名から拡張子（.py）を取り除いたもの

---

### 42-04. モジュールの使い方

- 「モジュール名.関数名()」と書くことで、モジュール内の関数を実行することができる
- 引数がある場合、関数を使用するときと同様に()の中に書く

#### 例（モジュールの使い方）

- script.pyファイル

  ```python
  >>> import utils

  >>> utils.validate(player_hand):
  ...    compuer = 1
  ...    utils.point_hand(player_hand, player_name)
  ```

- utils.pyファイル

    ```python
    >>> def validate(hand):
    >>> def print_hand(hand, name = 'ゲスト')
    >>> def judge(player, computer)
    ```

---

#### 演習（モジュールを使おう）

- script.pyファイル

  ```python
  # 3つの関数のコードをutils.pyファイルに移す
  # こちらのコードは削除する

  # utils.pyファイルをモジュールとして読み込む
  >>> import utils

  >>> print('じゃんけんをはじめます')
  >>> player_name = input('名前を入力してください：')
  >>> print('何を出しますか？（0: グー, 1: チョキ, 2: パー)')
  >>> player_hand = int(input('数字で入力してください：'))

  # utilsモジュール内の関数validateを呼び出す
  >>> if utils.validate(player_hand):
  ...    computer_hand = 1
  ...    if player_name == '':
  
  # utilsモジュール内の関数print_handを呼び出す
  ...        utils.print_hand(player_hand)
  ...    else:

  # utilsモジュール内の関数validateを呼び出す
  ...        utils.print_hand(player_hand, player_name)

  # utilsモジュール内の関数validateを呼び出す
  ...    utils.print_hand(computer_hand, 'コンピューター')

  # utilsモジュール内の関数judgeを呼び出す
  >>>    result = utils.judge(player_hand, computer_hand)

  # 変数resultを出力
  >>>    print('結果は' + result + 'でした')

  >>> else:
  ...    print('正しい数値を入力してください')
  ```

- utils.pyファイル

  ```python
  >>> def validate(hand):
  ...    if hand < 0 or hand > 2:
  ...        return False
  ...    return True

  >>> def print_hand(hand, name='ゲスト'):
  ...    hands = ['グー', 'チョキ', 'パー']
  ...    print(name + 'は' + hands[hand] + 'を出しました')

  # 関数judgeを定義してください
  >>> def jugge(player, computer):

  # playerとcomputerの比較結果によって条件を分岐
  ...    if player == computer :
  ...        return '引き分け'
  ...    elif player == 0 and computer == 1:
  ...        return '勝ち'
  ...    elif player == 1 and computer == 2:
  ...        return '勝ち'
  ...    elif player == 2 and computer == 0:
  ...        return '勝ち'
  ...    else:
  ...        return '負け'
  ```

---

## 43. ライブラリを使おう

### 43-01. じゃんけんゲームを完成させよう

- 最後にコンピューターの出す手をランダムにしてみる

---

### 43-02. ライブラリ

- 前回は自分でモジュールを作成したが、pythonには便利なモジュールがいくつか用意されている
- あらかじめ用意されているモジュールのことを「標準ライブラリ」と呼ばれる
- importを用いて読み込むことで便利な関数を利用できるようになる

---

### 43-03. randomモジュール

- randomモジュールに用意されている関数randintを用いて、コンピューターの手をランダムになるようにさせる
- random.randint(x, y)と書くことで、xからyまでの整数をランダムに取得することができる

#### 例（randomモジュール）

- 入力（randint関数を用いて、0-2の数値をランダムに取得）

```python
>>> import utils
>>> import random

>>> if utils.validate(player_hand):
...    compuer_hand = random.randint(0, 2)
```

#### 演習（ライブラリを使おう）

- 入力

```python
>>> import utils

# randomモジュールを組み込む
>>> import random

>>> print('じゃんけんをはじめます')
>>> player_name = input('名前を入力してください：')
>>> print('何を出しますか？（0: グー, 1: チョキ, 2: パー）')
>>> player _hand = int(input('数字で入力してください：'))

>>> if utils.validate(player_hand):
# randintを用いてから0から2までの変数を取得し、変数computer_handに代入
...    compuer_hand = random.randint(0, 2)

...    if player_name == '':
...        utils.print_hand(player_hand)
...    else:
...        utils.print_hand(player_hand, player_name)

...    utils.print_hand(computer_hand, 'コンピューター')

...    result = utils.judge(player_hand, compter_hand)
...    print('結果は' + result + 'でした')
... else:
...    print('正しい数値を入力してください')
```

---

> ここからPythonコース4

## 44. 目標物の確認

### 44-01. このレッスンで学ぶ内容

- クラスについて学ぶ
- 料理注文システムを作成しながら学ぶ

---

### 44-02. 目標物の確認

- 実行中にユーザーから購入する商品の番号と個数を受け取る
- コンソールが入力待ちの状態になったら数字を入力し、リターンキーを押す

---
