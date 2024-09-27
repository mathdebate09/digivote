import scrapy
import re
from urllib.parse import urlparse, urljoin
from twisted.internet.error import DNSLookupError, TimeoutError, TCPTimedOutError
from scrapy.spidermiddlewares.httperror import HttpError

class SubdirectorySpider(scrapy.Spider):
    name = "myspider"
    start_urls = [
        'https://vikaspedia.in/social-welfare/differently-abled-welfare/schemes-programmes/accessible-elections', 
        'https://thebetterindia.com/347158/general-elections-2024-voting-rights-for-persons-with-disabilities-in-india-theme-accessible-elections/',
        'https://www.eci.gov.in/persons-with-disabilities/',
        'https://www.thehindubusinessline.com/news/elections/884-lakh-people-with-disabilities-registered-in-the-electoral-roll-election-commission/article67957921.ece',
        'https://www.deccanherald.com/india/ecs-efforts-towards-inclusion-2958803',
        'https://www.indiatoday.in/india/story/election-commission-date-announcement-parliament-lok-sabha-assembly-elections-voters-arrangements-2515697-2024-03-16',
        'https://enabled.in/wp/election-2019-facilities-and-guidelines-for-persons-with-disabilities/',
    ]

    custom_settings = {
        'DOWNLOAD_DELAY': 1,
        'DEPTH_LIMIT': 1,
        'ROBOTSTXT_OBEY': False,
        'RETRY_TIMES': 1,
        'FEED_FORMAT': 'json',
        'FEED_URI': 'scraped_content.json',
        'DUPEFILTER_CLASS': 'scrapy.dupefilters.BaseDupeFilter',
    }

    def __init__(self, *args, **kwargs):
        super(SubdirectorySpider, self).__init__(*args, **kwargs)
        self.visited_urls = set()

    def parse(self, response):
        # Extract text content from specified selectors
        text_content = []
        for selector in ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'li', 'th', 'td']:
            elements = response.css(f'{selector}::text').getall()
            text_content.extend([text.strip() for text in elements if text.strip()])

        # Yield the extracted content
        yield {
            'content': ' '.join(text_content)
        }

    def handle_error(self, failure):
        if failure.check(HttpError):
            response = failure.value.response
            self.logger.error(f"HTTP error {response.status} for {response.url}")
        elif failure.check(DNSLookupError):
            self.logger.error(f"DNS lookup failed for {failure.request.url}")
        elif failure.check(TimeoutError, TCPTimedOutError):
            self.logger.error(f"Timeout error for {failure.request.url}")
        else:
            self.logger.error(f"Other error occurred for {failure.request.url}: {failure.value}")

    def closed(self, reason):
        self.logger.info(f"Spider closed: {reason}")
        self.logger.info(f"Total URLs scraped: {self.crawler.stats.get_value('item_scraped_count')}")