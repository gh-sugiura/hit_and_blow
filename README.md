# Hit and Blow


## 背景・目的
* アイテムの出品と購入を行うためのフリマアプリを開発
* （模擬案件②を通して実践に近い開発経験を積み、定義された要件を実装する能力を身につける）


## アプリケーションURL
* トップ画面:


## Gitリポジトリ
* https://github.com/gh-sugiura/hit_and_blow.git


## アプリケーション機能
* 


## 使用技術
| 言語/フレームワーク  | バージョン  | 
| ------------------- | ---------- | 
| JavaScript          |            | 
| jQuery              | 3.7.1      | 
| MySQL               | 8.0.26     | 
| phpMyadmin          |            | 
| nginx               | 1.21.1     | 


## 環境構築
**Dockerビルド**
1. `git clone git@github.com:coachtech-material/laravel-docker-template.git [ローカルリポジトリディレクトリ名]`
2. Gitリモートリポジトリ作成
3. GitリモートリポジトリとGitローカルリポジトリの紐付け
4. `docker-compose up -d --build`

**Node.js環境構築**
1. `docker-compose exec php bash`:PHPコンテナにログイン
2. `composer install`:composerのインストール
3. .env.exampleファイルから.envファイルを作成し、環境変数を設定
4. `php artisan key:generate`:アプリケーションキーの生成
5. `php artisan migrate`:マイグレーションの実行
6. `php artisan db:seed`:シーディングの実行

**TypeScript環境構築**
1. `docker-compose exec php bash`:PHPコンテナにログイン
2. `composer install`:composerのインストール
3. .env.exampleファイルから.envファイルを作成し、環境変数を設定
4. `php artisan key:generate`:アプリケーションキーの生成
5. `php artisan migrate`:マイグレーションの実行
6. `php artisan db:seed`:シーディングの実行

&ensp;※`sudo chmod -R 777 *`:ファイルアクセス権限を付与