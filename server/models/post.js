const db = require('../dbConfig/init')

class Posts {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.pseudonym = data.pseudonym
        this.story = data.story
    }

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postsData = await db.query('SELECT * FROM posts');
                let books = postsData.rows.map(p => new Posts(p));
                resolve (books);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static async create(postData) {
        return new Promise (async (resolve, reject) => {
            try {
                let postsData = await db.query('INSERT INTO posts (title, pseudonym, story) VALUES ($1, $2, $3) RETURNING *;', [ postData.title, postData.pseudonym, postData.story ]);
                let post = await new Posts(postsData.rows[0])
                resolve (post);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    }

}

module.exports = Posts