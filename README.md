# example-nerdpack

## Getting started

Run the following scripts:

```
npm install
npm start
```

Visit https://one.newrelic.com/?nerdpacks=local and :sparkles:

## Creating new artifacts

If you want to create new artifacts run the following command:

```
nr1 create
```

> Example: `nr1 create --type nerdlet --name my-nerdlet`.

### This command has profilename,region,api-key
nr1 profiles:add --name <profile name> --api-key <User key> --region <region>

### Profiles let you select which New Relic account you want to run commands against. If you have multiple accounts, you can view them with profiles:list:

nr1 profiles:list

### Notice that one profile is your default profile. This is the account your commands will run against, unless you specify another. To specify a profile for a particular command, use the --profile option:

nr1 create --profile <your profile>

nr1 profiles:default

nr1 profiles --help


## Metadata file
### nr1.json is the Nerdpack's metadata file, containing a schema type, unique identifier, a display name, and a description. Since you’re building a New Relic application for running and analyzing A/B tests, update the package's displayName to "A/B Test" and set the description to "A/B test your application using New Relic One":

  {
  "schemaType": "NERDPACK",
  "id": "311bcd0c-f7eb-4285-afed-4219179bf91d",
  "displayName": "A/B Test",
  "description": "A/B test your application using New Relic One."
}