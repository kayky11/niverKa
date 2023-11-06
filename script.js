document.addEventListener("DOMContentLoaded", function () {
    const aceitarConviteButton = document.getElementById("aceitarConvite");
    const negarConviteButton = document.getElementById("negarConvite");
    const agradecimentoDiv = document.getElementById("agradecimento");
    const tristezaDiv = document.getElementById("tristeza");

    aceitarConviteButton.addEventListener("click", function () {
        agradecimentoDiv.style.display = "block";
        tristezaDiv.style.display = "none";
        aceitarConviteButton.style.display = "none";
        negarConviteButton.style.display = "none";

        // Redireciona para o WhatsApp após um breve agradecimento
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=43991574284&text=Oi%2C%20aceitei%20seu%20convite%20de%20anivers%C3%A1rio!";
        }, 500000); // Redireciona após 3 segundos (3000 milissegundos)
    });

    negarConviteButton.addEventListener("click", function () {
        tristezaDiv.style.display = "block";
        agradecimentoDiv.style.display = "none";
        aceitarConviteButton.style.display = "none";
        negarConviteButton.style.display = "none";
    });
});document.addEventListener("DOMContentLoaded", function () {
    const aceitarConviteButton = document.getElementById("aceitarConvite");
    const negarConviteButton = document.getElementById("negarConvite");
    const agradecimentoDiv = document.getElementById("agradecimento");
    const tristezaDiv = document.getElementById("tristeza");

    aceitarConviteButton.addEventListener("click", function () {
        agradecimentoDiv.style.display = "block";
        tristezaDiv.style.display = "none";
        aceitarConviteButton.style.display = "none";
        negarConviteButton.style.display = "none";

        // Redireciona para o WhatsApp após um breve agradecimento
        setTimeout(function () {
            window.location.href = "https://api.whatsapp.com/send?phone=43991574284&text=Oi%2C%20aceitei%20seu%20convite%20de%20anivers%C3%A1rio!";
        }, 3000); // Redireciona após 3 segundos (3000 milissegundos)
    });

    negarConviteButton.addEventListener("click", function () {
        tristezaDiv.style.display = "block";
        agradecimentoDiv.style.display = "none";
        aceitarConviteButton.style.display = "none";
        negarConviteButton.style.display = "none";
    });
});
