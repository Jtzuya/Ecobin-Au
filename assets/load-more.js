const refArticleContainer = document.querySelector('.__articleContent')
let api_next_url = document.querySelector('[data-next-url]').getAttribute('data-next-url')

const loadMoreBtn = document.querySelector('.__articleReadMoreBtn')
const readMoreSpinner = document.querySelector('.__readMoreSpinner')
function addSpinner() {
    readMoreSpinner.style.display = 'block'
    loadMoreBtn.style.display = 'none'
}

function removeSpinner() {
    readMoreSpinner.style.display = 'none'
    loadMoreBtn.style.display = 'block'
}

loadMoreBtn.addEventListener('click', getArticleData)

async function getArticleData() {
    const refUrl = document.querySelector('[data-orig-url]').getAttribute('data-orig-url')
    addSpinner()
    const res = await fetch(api_next_url)
    const html = await res.text()
    let parser = new DOMParser()
    let parsedDoc = parser.parseFromString(html, 'text/html')
    let articleContainer = parsedDoc.querySelector('.__articleContent')
    let eachArticle = parsedDoc.querySelectorAll('.__eachArticle')
    // console.log(api_next_url, 'old url')

    let new_next_url = articleContainer.getAttribute('data-next-url')
    api_next_url = new_next_url
    // console.log(api_next_url, 'new url')

    eachArticle.forEach(article => {
        refArticleContainer.append(article)
    })

    if(refUrl === new_next_url) {
        loadMoreBtn.style.display = 'none'
        readMoreSpinner.style.display = 'none'
        document.querySelector('.__readMoreCtaCase').textContent = "There are no articles to be loaded..."
        // console.log('remove btn')
    } else {
        removeSpinner()
        // console.log('still going')
    }
}

// Remove all duplcated tags
function refactorTags() {
    const allTags = document.querySelectorAll('.__tag')
    let tagsArr = []
    allTags.forEach(tag => {
        // console.log('result: ', tag)
        tagsArr.push(tag.textContent)
    })
    // console.log('tags Array: ', tagsArr)

    // A function that filters out duplicated tags
    removeDuplicates(tagsArr)
}

function removeDuplicates(arr) {
    const tagsCase = document.querySelector('.__uniqArticleTagsCase')
    tagsCase.classList.add('__additionalPadding')
    tagsCase.innerHTML = ''
    const newArrOfTags = arr.filter((item, index) => arr.indexOf(item) === index);
    newArrOfTags.forEach(tag => {
        const tagSpanEl = document.createElement('span')
        tagSpanEl.classList.add('__tag')
        tagSpanEl.textContent = tag
        tagsCase.appendChild(tagSpanEl)
    })

    // console.log('new array of tags: ', newArrOfTags)
}

refactorTags()