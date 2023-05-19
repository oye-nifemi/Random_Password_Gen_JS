function generate_pass() {
      let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
      let password = ""

      for (var n=0; n<10; n++){
            let gen = Math.random()
            console.log(gen)
            var randomIndex = Math.floor(gen * characters.length - 1)
            password += characters[randomIndex]
      }
      console.log(password)
      document.getElementById("password").textContent = password
}