angular.module("Webmail", ["ngSanitize", "ui.tinymce"])
  .controller("WebmaiCtrl", function($scope, $location, $filter) {

    $scope.dossiers = [{
      value: "RECEPTION",
      label: 'Boite de réception',
      emails: [{
        id: 1,
        from: "Albator",
        to: "Rudy",
        subject: "Je reviens",
        date: new Date(2014, 2, 20, 15, 30),
        content: "Lorem ipsum <b>dolor</b> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 2,
        from: "Capintaine Flam",
        to: "Rudy",
        subject: "Bisous de l'espace",
        date: new Date(2014, 3, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 3,
        from: "Pikachu",
        to: "Rudy",
        subject: "Pika pika !",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Pika pika! chuuuuuuuuu. Pika pika ! Chuuuuuuuuu. Pika pika! Chuuuuuuuuu"
      }, {
        id: 4,
        from: "Barbapapa",
        to: "Rudy",
        subject: "Hulahup Barbatruc",
        date: new Date(2014, 2, 15, 14, 15),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }]
    }, {
      value: "ARCHIVES",
      label: "Archives",
      emails: [{
        id: 5,
        from: "Candy",
        to: "Rudy",
        subject: "Bon anniversaire",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 6,
        from: "Hiro Nakamura",
        to: "Rudy",
        subject: "Konichiwa",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 7,
        from: "Asuka Langley Soryu",
        to: "Rudy",
        subject: "Ca va chier",
        date: new Date(2014, 2, 15, 17, 50),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }]
    }, {
      value: "ENVOYES",
      label: "Envoyés",
      emails: [{
        id: 8,
        from: "Albator",
        to: "Rudy",
        subject: "Bien la famille ?",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 9,
        from: "Capintaine Flam",
        to: "Rudy",
        subject: "Gloubiboulga Night",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }]
    }, {
      value: "SPAM",
      label: "Courrier indésirable",
      emails: [{
        id: 10,
        from: "Rue du discount",
        to: "Rudy",
        subject: "Envie d'un nouveau frigo ?",
        date: new Date(2014, 2, 15, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, {
        id: 11,
        from: "Sofinoga",
        to: "Rudy",
        subject: "Besoin d'argent ?",
        date: new Date(2014, 2, 18, 16, 12),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, ]
    }];

    $scope.idProchainMail = 12;

    $scope.dossierCourant = null;
    $scope.emailSelectionne = null;

    $scope.versEmail = function(dossier, email) {
      $location.path("/" + dossier.value + "/" + email.id);
    }

    $scope.selectionDossier = function(dossier) {
      $scope.dossierCourant = dossier;
      $scope.emailSelectionne = null;
      if (dossier)
        $scope.nouveauMail = null;
    }

    $scope.selectionEmail = function(email) {
      $scope.emailSelectionne = email;
    };

    // tri
    $scope.champTri = null;
    $scope.triDescendant = false;

    $scope.triEmails = function(champ) {
      if ($scope.champTri == champ) {
        $scope.triDescendant = !$scope.triDescendant;
      } else {
        $scope.champTri = champ;
        $scope.triDescendant = false;
      }
    }

    $scope.cssChevronsTri = function(champ) {
      return {
        glyphicon: $scope.champTri == champ,
        'glyphicon-chevron-up': $scope.champTri == champ && !$scope.triDescendant,
        'glyphicon-chevron-down': $scope.champTri == champ && $scope.triDescendant
      }
    }

    //Recherche
    $scope.recherche = null;

    $scope.razRecherche = function() {
      $scope.recherche = null;
    }

    // création d'emails

    $scope.nouveauMail = null;
    $scope.razMail = function() {
      $scope.nouveauMail = {
        from: "Rudy",
        date: new Date()
      };
      $scope.formNouveauMail.$setPristine();
      document.getElementById("formNouveauMail").reset();
    }

    $scope.envoiMail = function() {

      if ($scope.formNouveauMail.$valid) {
        $scope.dossiers.forEach(function(item) {
          if (item.value == "ENVOYES") {
            $scope.nouveauMail.id = $scope.idProchainMail++;
            item.emails.push($scope.nouveauMail);
            $scope.nouveauMail = null;
            $location.path("/");
          }
        })
      } else {
        alert("Merci de vérifier votre saisie.");
      }
    }

    $scope.optionsTinyMce = {
      language: "fr_FR",
      statusbar: false,
      menubar: false
    }

    $scope.$watch(function() {
      return $location.path();
    }, function(newPath) {
      var tabPath = newPath.split("/");
      if (tabPath.length > 1) {
        if (tabPath[1] == "nouveauMail") {
          $scope.razMail();
          $scope.selectionDossier(null);
        } else {
          var valDossier = tabPath[1];
          $scope.dossiers.forEach(function(item) {
            if (item.value == valDossier) {
              $scope.selectionDossier(item);
            }
          });
          if (tabPath.length > 2) {
            var idMail = tabPath[2];
            $scope.dossierCourant.emails.forEach(function(item) {
              if (item.id == idMail) {
                $scope.selectionEmail(item);
              }
            });
          }
        }
      }
    });
  })
  .filter("surbrillanceRecherche", function() {
    return function(input, recherche) {
      if (recherche) {
        return input.replace(new RegExp("(" + recherche + ")", "gi"), "<span class='surbrillanceRecherche'>$1</span>");
      } else {
        return input;
      }
    }
  });
