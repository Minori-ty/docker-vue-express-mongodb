import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Random } from 'mockjs'

mongoose.connect(
    'mongodb://mongo/users',
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    },
    (err) => {
        if (err) return console.log('数据库连接失败')
        console.log('数据库连接成功')
    }
)

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        trim: true,
        default: '罗峰',
    },
    age: {
        type: Number,
        required: true,
    },
})

const User = mongoose.model('User', courseSchema, 'users')

add()

async function fn() {
    let data = await User.find()
    console.log(data)
}
fn()

User.find()
    // .select('name -_id')
    .then((res: any) => console.log(res))

const app = express()

//设置跨域访问
app.all('*', (req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.get('/', (req: Request, res: Response) => {
    res.send(`
    <h1>volume!<h1/>
    <a href="/user">click to user and view users info</a>
    <a href="/add">添加数据</a>
    `)
})

app.get('/user', (req: Request, res: Response) => {
    ;(async () => {
        let data = await User.find()
        console.log(data)
        await res.send(data)
    })()
})

app.get('/add', async (req: Request, res: Response) => {
    await add()
    res.send('添加成功')
})

app.listen(8000, () => {
    console.log('http://localhost:8000/user')
})

function add() {
    User.create(
        {
            name: Random.cname(),
            age: Random.natural(),
        },
        (err) => {
            if (err) return console.log('添加失败')
            console.log('添加成功')
        }
    )
}
