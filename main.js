<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <form action="" class="form" data-form>
      <div class="input-wrapper" data-input-wrapper>
        <div class="input-placeholder">Filled</div>
        <input
          class="input"
          placeholder="имя"
          autocomplete="'on"
          data-input
          type="text"
          name="name"
          id=""
          required
        />
        <button class="input-clear" data-clear-input>clear</button>
      </div>
      <div class="input-wrapper" data-input-wrapper>
        <div class="input-placeholder">Filled</div>
        <input
          class="input"
          placeholder="телефон"
          autocomplete="'on"
          data-input
          type="tel"
          name="tel"
          id=""
          required
        />
        <button class="input-clear" data-clear-input>clear</button>
      </div>
      <div class="input-wrapper" data-input-wrapper>
        <div class="input-placeholder">Filled</div>
        <textarea
          class="input"
          name="name"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button class="submit" type="submit">submit</button>
    </form>
  </body>
  <script src="main.js"></script>
</html>
