import requests
from lxml import html
from datetime import datetime
from flask import Flask, jsonify, request

app = Flask(__name__)

def fetch_swe_list():
    url = "https://github.com/SimplifyJobs/Summer2025-Internships"

    try:
        response = requests.get(url)
        tree = html.fromstring(response.content)
        listings = tree.xpath('//markdown-accessiblity-table/table/tbody/tr')
        total_listings = len(listings)

        current_date = datetime.now().strftime("%b %d")
        i = 1
        visited = False
        companies = []
        roles = []
        locations = []
        application_links = []

        while i<=total_listings:
            date_posted = tree.xpath('//markdown-accessiblity-table/table/tbody/tr[' + str(i) + ']/td[5]')[0].text_content()
            if date_posted == current_date:
                company = tree.xpath('//markdown-accessiblity-table/table/tbody/tr[' + str(i) + ']/td/strong')[0].text_content()
                role = tree.xpath('//markdown-accessiblity-table/table/tbody/tr[' + str(i) + ']/td[2]')[0].text_content()
                location = tree.xpath('//markdown-accessiblity-table/table/tbody/tr[' + str(i) + ']/td[3]')[0].text_content()
                application_link = tree.xpath('//markdown-accessiblity-table/table/tbody/tr[' + str(i) + ']/td[4]/a')[0].get('href')
                companies.append(company)
                roles.append(role)
                locations.append(location)
                application_links.append(application_link)
                visited = True
            elif visited:
                break
            i += 1
        return companies, roles, locations, application_links
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return [], [], [], []
    
    except Exception as e:
        print(f"Unexpected error: {e}")
        return [], [], [], []

@app.route('/swe-lists', methods=['GET'])
def get_lists():
    companies, roles, locations, application_links = fetch_swe_list()
    return jsonify({
        "companies": companies,
        "roles": roles,
        "locations": locations,
        "application_links": application_links
    }), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002,debug=True) 