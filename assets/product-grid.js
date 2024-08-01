//---load more-----// 
const jsLoadMore = document.querySelectorAll('.js-load-more')
const wrapperItem = document.querySelector('.tp-fcl-grid__inner')
const parser = new DOMParser();

if (jsLoadMore.length > 0) {
  jsLoadMore.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var totalPages = parseInt(document.querySelector('#all-pages').value),
        currentPage = document.querySelector('#this-page');
      const loadMoreTextEle = item.querySelector('.load-more-text')
      const loadingEle = item.querySelector('.tp-loading')

      loadMoreTextEle.classList.add('opacity-0')
      loadingEle.classList.remove('opacity-0')

      var nextUrl = document.querySelector('#next-link'),
        currentPageNew = parseInt(currentPage.value) + 1;
       
      fetch(nextUrl.value)
        .then(response => response.text())
        .then(function (data) {
          data = parser.parseFromString(data, "text/html");
          const wrapperItemRes = data.querySelector('.tp-fcl-grid__inner')
          if (wrapperItemRes) {
            const listItemNew = wrapperItemRes.querySelectorAll('.tp-fcl-grid__item')
            if (listItemNew.length > 0) {
              listItemNew.forEach(function (itemProduct) {
                wrapperItem.appendChild(itemProduct)
              })
            }
          }
          let nextUrlString = nextUrl.value
          let numberPageCurrnent = parseInt(nextUrlString.substr(nextUrlString.length - 1))
          let numberPageNext = numberPageCurrnent + 1
          let nextUrlNew = nextUrlString.replace(`?page=${numberPageCurrnent}`, `?page=${numberPageNext}`)

          nextUrl.value = nextUrlNew
          currentPage.value = currentPageNew

          if (currentPageNew < totalPages) {
            item.removeAttribute("disabled")
            item.classList.remove('loading-effect')

            loadMoreTextEle.classList.remove('opacity-0')
            loadingEle.classList.add('opacity-0')
          }

          if (currentPageNew >= totalPages) {
            item.parentElement.remove()
          }
        })
    })
  })

}

