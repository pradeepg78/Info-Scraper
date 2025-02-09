import newspaper

def scrape_headlines(url):
    cnn_paper = newspaper.build(url, memoize_articles=False) 

    for article in cnn_paper.articles:
        print(article.url)
        article.download()
        article.parse()
        print(f'Title: {article.title}, authors: {article.authors}')


if __name__ == "__main__":
    headlines = {"CNN": "https://www.cnn.com/"}
    for site, url in headlines.items():
        scrape_headlines(url)