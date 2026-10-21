# Bowmark recipes

Ready-made scripts for common jobs. Call one by name with your API key and get JSON
back, or read the script here and run (or change) it yourself.

**You need an API key.** Sign up at https://bowmark.ai/sign-up and create a key at
https://bowmark.ai/dashboard/keys.

## Call a recipe

```sh
curl https://api.bowmark.ai/v1/recipes/find-booking-links \
  -H "authorization: Bearer $BOWMARK_API_KEY" \
  -H "content-type: application/json" \
  -d '{"name":"Caleb Peffer","company":"firecrawl","domain":"firecrawl.dev"}'
```

The answer is the same envelope `POST /v1/run` returns: check `status` (`ok`,
`partial`, `error`, `needs_user`), then read `result`.

`GET https://api.bowmark.ai/v1/recipes` lists every recipe with its inputs.
`GET https://api.bowmark.ai/v1/recipes/<id>` returns one, script included.

## Run the script yourself

Each `.js` file here is a plain `POST /v1/run` script. It reads its inputs from a
global named `input`, so put one line in front of it:

```sh
SCRIPT="const input = {\"name\":\"Caleb Peffer\",\"company\":\"firecrawl\"};
$(cat find-booking-links.js)"
curl https://api.bowmark.ai/v1/run \
  -H "authorization: Bearer $BOWMARK_API_KEY" \
  -H "content-type: application/json" \
  -d "$(jq -n --arg s "$SCRIPT" '{script: $s}')"
```

Copy one and change it: every `bowmark.*` function it calls is documented by
`GET https://api.bowmark.ai/v1/library?query=<what you want to do>`.

## The recipes

| Recipe | Give it | Get back |
|---|---|---|
| [`find-booking-links`](find-booking-links.js) | `name`, plus any of `company`, `domain`, `email`, `x`, `github`, `urls`, `archive`. Each extra one is another place to find a link they published | Their Calendly or Cal.com link, its events, whether it is open, and how sure we are it is theirs (`confirmed`, `likely`, `unverified`) |
