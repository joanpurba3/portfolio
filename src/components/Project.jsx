import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
export default function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Perpustakaan Digital',
      image: ['perpus.png', 'perpus1.png', 'perpus2.png', 'perpus3.png'],
    },
    {
      id: 2,
      title: 'Sistem Informasi Data Mahasiswa',
      image: [
        'mahasiswa.png',
        'mahasiswa1.png',
        'mahasiswa2.png',
        'mahasiswa3.png',
      ],
    },
    {
      id: 3,
      title: 'E commerce Penjualan Baju',
      image: ['port1.jpg', 'zhago1.png', 'zhago2.png', 'zhago3.png'],
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const displayProjectById = (id) => {
    const foundProject = projects.find((project) => project.id === id);
    setSelectedProject(foundProject);

    setShow(true);
  };
  const hidden = () => {
    setShow(false);
  };
  const move = (id_project, index) => {
    // Map proyek untuk menemukan proyek yang benar dan pindahkan gambar yang dipilih ke indeks 0
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === id_project) {
          const newImages = [...project.image];
          const [clickedImage] = newImages.splice(index, 1); // Hapus gambar yang diklik
          newImages.unshift(clickedImage); // Masukkan ke posisi pertama
          return { ...project, image: newImages };
        }
        return project;
      })
    );

    // Perbarui selectedProject untuk memastikan UI menampilkan pembaruan
    setSelectedProject((prev) => {
      if (prev && prev.id === id_project) {
        const newSelectedImages = [...prev.image];
        const [clickedImage] = newSelectedImages.splice(index, 1);
        newSelectedImages.unshift(clickedImage);
        return { ...prev, image: newSelectedImages };
      }
      return prev;
    });
  };
  const Open = () => {
    return (
      <>
        <div className="w-full h-full flex justify-center items-center   fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="p-[10px] rounded-lg bg-white w-[90%] 2xl:w-[80%]    relative h-[412px] md:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <div className="w-full ">
              <div className="w-full flex justify-end ">
                <IoMdClose
                  onClick={hidden}
                  className="text-[30px] hover:cursor-pointer "
                />
              </div>
              <div className="w-full h-[240px] md:h-[300px] xl:h-[360px] 2xl:h-[420px] mt-2   border-8 border-gray-400">
                <img
                  className="w-full h-full"
                  src={'image/' + selectedProject.image[0]}
                  alt=""
                />
              </div>
              <div className="w-full mt-2 h-[90px] md:h-[130px] xl:h-[160px] 2xl:h-[190px] flex gap-3 overflow-x-auto ">
                {selectedProject.image.map((img, index) => (
                  <img
                    key={index}
                    onClick={() => move(selectedProject.id, index)}
                    className={` h-full hover:cursor-pointer hover:scale-95 ${
                      index === 0 ? 'border-4 border-black hover:scale-100' : ''
                    }`}
                    src={'image/' + img}
                    alt=""
                  />
                ))}
                {/* <img
                  onClick={() => move(1, selectedProject.id)}
                  className="w-[80px] md:w-[120px] xl:w-[150px] 2xl:w-[170px] h-full"
                  src={'image/' + selectedProject.image[1]}
                  alt=""
                />
                <img
                  onClick={() => move(2, selectedProject.id)}
                  className="w-[80px]  md:w-[120px] xl:w-[150px] 2xl:w-[170px] h-full"
                  src={'image/' + selectedProject.image[2]}
                  alt=""
                />
                <img
                  onClick={() => move(3, selectedProject.id)}
                  className="w-[80px]  md:w-[120px] xl:w-[150px] 2xl:w-[170px] h-full"
                  src={'image/' + selectedProject.image[3]}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="w-full mt-9 flex flex-col items-center text-center ">
        <h1 className="teko  text-[35px] lg:text-[45px] xl:text-[55px]">
          My Project
        </h1>
        <p className="kanit w-[90%] lg:max-w-[1000px] lg:text-[20px]">
          These are some of the college assignment project i worked on
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3  w-[95%] md:w-[92%] lg:w-[90%] xl:w-[84%] xl:max-w-[1200px]  mt-9   place-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => displayProjectById(project.id)}
              className=" hover:cursor-pointer  w-full max-w-[400px]   shadow-2xl rounded-b-xl">
              <img
                className="w-full h-[130px] lg:h-[160px]"
                src={'image/' + project.image[0]}
                alt=""
              />
              <p className="kanit py-4">{project.title}</p>
            </div>
          ))}
        </div>
        {show && <Open />}
      </div>
    </>
  );
}
