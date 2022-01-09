const { ObjectId } = require("mongodb");
const db = require("../data/database");

class Post {
    constructor(title, content, id) {
        this.title = title;
        this.content = content;

        if (id) {
            this.id = new ObjectId(id);
        }
    }

    static async fetchAll() {
        const posts = await db.getDb().collection("posts").find().toArray();

        return posts;
    }

    async fetch() {
        if (!this.id) {
            return;
        } else {
            const post = await db
                .getDb()
                .collection("posts")
                .findOne({ _id: this.id });
            this.title = post.title;
            this.content = post.content;
        }
    }

    async save() {
        let result;
        if (this.id) {
            result = await db
                .getDb()
                .collection("posts")
                .updateOne(
                    { _id: this.id },
                    { $set: { title: this.title, content: this.content } }
                );
        } else {
            result = await db.getDb().collection("posts").insertOne({
                title: this.title,
                content: this.content,
            });
        }

        return result;
    }

    async delete() {
        if (!this.id) {
            return;
        }

        const result = await db
            .getDb()
            .collection("posts")
            .deleteOne({ _id: this.id });

        return result;
    }
}

module.exports = Post;
