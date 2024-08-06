![Smoke](https://github.com/pgutx/e2e-testsuite/actions/workflows/smoke.yml/badge.svg) ![E2E](https://github.com/pgutx/e2e-testsuite/actions/workflows/e2e.yml/badge.svg) 

# End to End testsuite

## About
Automated End to End testsuite. This testsuite is a part of the system testing project which additionally consists of testplan and manually drafted testcases.

The aforementioned parts of the project can be found here - 
https://drive.google.com/drive/folders/1MozHieNdY-N8WVahpjVHgFwL0uC-kOgF

The testsuite is built using **Playwright** with **TypeScript**

The framework was picked due to its ease of use, flexibility and out of the box support of parallelism and auto-waits.

The report is served over a custom - **Monocart** - reporter.

Link to the report - 
https://e2e-testsuite-report.netlify.app/

Additionally two **GitHub Actions** workflow are set up, smoke test which runs every 3rd day from monday to sunday at 8am and end to end workflow which runs on manual dispatch.

## Tests

Each automated test is based on manually prepared testcases.

The testcases have been prepared in line with the **Behvaiour Driven Development** philosophy. Each scenario covers exactly one behaviour. The tests were written using **Gherkin** language.

## Practices

The tests were written according to the Playwright's best practices. In line with the **Arrange - Act - Assert** pattern, the use of **Page Object Model** and **fixtures** has made the tests clear and cohesive. 

## Continuous Integration

The CI was achieved with the help of GitHub Actions.

Two workflows are prepared - Smoke and End to End. The first one is set to run on schedule whereas the second one is triggered by manual dispatch.

## Report

The HTML report is served over Monocart reporter, additionally both workflows generate HTML report which can be downloaded and served as a simple web page.

## Docker Image

Here are the steps to run the tests via the Docker container.

Spin up the Docker engine

Run the 

 ```docker run --rm pgutx/playwright-end-to-end-testsuite:latest``` 
 
 via the CLI