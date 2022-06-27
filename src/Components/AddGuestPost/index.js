import React, { useState, useEffect } from "react";
import axios from "axios";
import PuzzleIcon from "../../Images/puzzle.png";
import {
  AddPostContainer,
  Title,
  InputWrapper,
  Input,
  Select,
  TextArea,
  Button,
} from "./style";
import { WriteData } from "../../idbHelper";
import { useHistory } from "react-router-dom";
const AddGuestPost = () => {
  let history = useHistory();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState();
  const [photo, setPhoto] = useState();
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  let error;

  useEffect(() => {
    const tok = localStorage.getItem("token");
    setToken(tok);

    // fetch("https://gameschange.herokuapp.com/api/profile/current", {
    fetch("http://localhost:8080/api/profile/current", {
      headers: new Headers({
        Authorization: tok,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const validAndSendPost = () => {
    try {
      if (user) {
        setPhone(user.phone);
        setEmail(user.email);
        setCity(user.city);
      }

      if (type === "Typ konsoli" || type === "") {
        error = "Wybrano zły typ konsoli.";
        throw error;
      }
      if (title.length <= 3 || title === "") {
        error = "Tytuł ogłoszenia jest zbyt krótki.";
        throw error;
      }
      if (desc.length <= 3 || desc === "") {
        error = "Uzupełnij opis ogłoszenia.";
        throw error;
      }
      if (phone.length !== 9) {
        error = "Wprowadz poprawny numer telefonu";
        throw error;
      }
      if (email !== "") {
        const regex = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );

        if (!regex.test(email)) {
          error = "Email nie jest poprawny.";
          throw error;
        }
      }
      if (city === "") {
        error = "Wprowadź lokalizacje ogłoszenia";
        throw error;
      }

      const fd = new FormData();
      fd.append("type", type);
      fd.append("title", title);
      fd.append("description", desc);
      fd.append("photo", photo, photo.name);
      fd.append("phone", phone);
      fd.append("email", email);
      fd.append("city", city);
      const syncPost = {
        type: type,
        title: title,
        description: desc,
        photo: photo,
        phone: phone,
        email: email,
        city: city,
      };

      if ("serviceWorker" in navigator && "SyncManager" in window) {
        navigator.serviceWorker.ready.then((sw) => {
          console.log("post", syncPost);
          WriteData("sync-post", syncPost)
            .then(() => {
              const options = {
                body: "Odczekaj chwile, aby znaleźć go na ekranie głównym aplikacji!",
                icon: PuzzleIcon,
                vibrate: [100, 50, 200],
                tag: "upload-post-notification",
                renotify: true,
              };
              navigator.serviceWorker.ready.then((swreg) => {
                swreg.showNotification("Post został dodany!", options);
              });
              sw.sync.register("sync-new-post");
            })
            .catch((err) => console.log(err));
        });
      } else {
        axios
          .post(`http://localhost:8080/api/posts/addguest`, fd)
          // .post(`https://gameschange.herokuapp.com/api/posts/addguest`, fd)
          .then((res) => {
            console.log(res.data);
            alert("post zostal dodany");
          });
      }

      // zakomentowana opcja postow do testu background sync
      // axios.post(`http://localhost:8080/api/posts/addguest`, fd).then((res) => {
      //   console.log(res.data);
      //   alert("post zostal dodany")
      // });
      history.push("/");
    } catch {
      alert(error);
    }
  };

  return (
    <AddPostContainer>
      <div>
        {user ? (
          <Title>DODAJ POST JAKO {user.login.toUpperCase()}</Title>
        ) : (
          <Title>DODAJ POST JAKO GOSC</Title>
        )}
      </div>
      <div>
        <Select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option key={"TYP"}>Typ konsoli</option>
          <option key={"PS5"}>Play Station 5</option>
          <option key={"PS4"}>Play Station 4</option>
          <option key={"PS3"}>Play Station 3</option>
          <option key={"XBOX Series X"}>Xbox Series X</option>
          <option key={"XBOX Series S"}>Xbox Series S</option>
          <option key={"XBOX One"}>Xbox One</option>
        </Select>
        <InputWrapper>
          <label>
            <Input
              required
              type="text"
              name="title"
              placeholder="Tytul"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <div>
            <TextArea
              required
              placeholder="Opis"
              onChange={(e) => setDesc(e.target.value)}
            ></TextArea>
          </div>
          {user ? null : (
            <div>
              <div>
                <label>
                  <Input
                    required
                    type="number"
                    name="phone"
                    placeholder="Telefon"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label>
                  <Input
                    required
                    type="text"
                    name="city"
                    placeholder="Miasto"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          )}

          <div>
            <Input
              type="file"
              id="photo"
              name="photo"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
            />
          </div>
          <div>
            <Button onClick={validAndSendPost}>Wyslij</Button>
          </div>
        </InputWrapper>
      </div>
    </AddPostContainer>
  );
};

export default AddGuestPost;
