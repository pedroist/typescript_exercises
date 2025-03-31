//Exercise on coderpad, it includes overriding in typescript of method print, inheritence, etc.

const _ = require("lodash")

class Story {
    priority: number
    title: string

    constructor(priority: number, title: string) {
        this.priority = priority
        this.title = title
    }

    print() {
        console.log(`${this.priority} — ${this.title}`)
    }
}

class Bug extends Story {
    steps: string[]

    constructor(priority: number, title: string, steps: string[]) {
        super(priority, title)

        if (!steps || steps.length === 0) {
            throw Error("Bug must have steps")
        }

        this.steps = steps
    }

    print() {
        console.log(
            `${this.priority} — ${this.title}: ${this.steps.join(", ")}`
        )
    }
}

class TodoList {
    storyArray: Story[]

    constructor() {
        this.storyArray = []
    }

    addStory(story: Story) {
        this.storyArray.push(story)
        this.storyArray.sort((a, b) => a.priority - b.priority)
    }

    printStories() {
        for (let story of this.storyArray) {
            story.print()
        }
    }
}

const todoList = new TodoList()

todoList.addStory(new Story(30, "title 1"))
todoList.addStory(new Story(20, "title 2"))
todoList.addStory(new Story(10, "title 3"))
todoList.addStory(new Bug(60, "Bug", ["Step 1", "Step 2"]))

todoList.printStories()
