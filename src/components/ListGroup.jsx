import useSWR from 'swr';

function ListGroup() {
    let artistList = [
        { id: '4NOFcRCgjvnRy8nKVGUM0L', name: 'Steveruu' },
        { id: '3GuGHOzPZ0AhH9hK8LqCsK', name: 'JDSLVT' }, 
        { id: '1NspLfgAsucc39MeTipXNy', name: 'CYREX' },
        { id: '5VW7PyWYrxkuWlzSxic7N2', name: 'HKLS' },
        { id: '3xVvsXvpURgj3zeTYiBtCv', name: 'Valisbeats' },
        { id: '6kEMNp6TPPl70gOicGT0uN', name: 'ACXD PLAYA' },
        { id: '50ENuvgRkFZ5hMA0BFEeAM', name: 'Hellxn' },
        { id: '2qSLwqeQFUHWEzC86u3vRM', name: 'AWXKEN' },
        { id: '2HJYEBrWgHX2MtQng48uSw', name: 'GMANE' },
        { id: '2b5QC4KWCMRKdD7LiqvfMQ', name: 'FAON' },
        { id: '3D57Cu0cu9caAvtl41xUx6', name: 'SXMYU3RU' },
        { id: '5NTcWbyHYQjA20voWilXeG', name: 'kill4sky' },
        { id: '0cpiDjS2bR8rWA8JLhU2uM', name: 'GiverT' },
        { id: '7h22ZneYwwRyOwlgnMd8So', name: 'Querky' },
        { id: '1HbkAuG6cZndTXlORaQgOq', name: 'sadz' },
        { id: '5QvicxsGxXNicXu1f9guia', name: 'YUI PLAYA' },
        { id: '3tjBt96Yk1zS14xc8wldlT', name: 'FEMBOY PLAYA' },
        { id: '02pls7VjPaXvSbarvDUW7p', name: 'MAROS' },
        { id: '1tqkzvbam2vnrUdredtErd', name: 'Shvttxrd' },
        { id: '5PNDGjJ1e6Tdr8LWmZDqPO', name: 'noT ghxst' },
        { id: '2GaadbJKN8S8PbST0XwwQD', name: 'xfgin' },
        { id: '0IM0lwjzI0BYaayMweraKT', name: 'Lonnex' },
        { id: '2IIf5hkbIzh1dqhG1T132E', name: 'COBRA 808' },
        { id: '3TTWuZxamiQERzR42VNMS5', name: 'VESUV' },
        { id: '6JHPfVpbSjecbv3oAOJSov', name: 'DXNTBXTHER' },
        { id: '1hRLNOS6wPhSMLfXVaJk5t', name: 'Akuda' },
        { id: '6UIdgISBaIHMOvWwz4nfP1', name: 'PRASSOZMRD' },
        { id: '569eihmWcdg4HvSPDnjlPn', name: 'Ondrejoda' },
        { id: '1lc5n2pQ6NFSFcSFTnJUFX', name: 'PHONK CZ/SK' },
        { id: '500spF7xFcONsMI7ha29IQ', name: 'PAXNKOXD' },
        { id: '5oqO5h9gUdtVFfj5l3RNOg', name: 'Matěj Syrový' },
        { id: '1Ua2qIskijOuQdRMt9rbDq', name: 'SCEPTRUM'},
        { id: '4551yzmt7C1DbJkCeaKKpY', name: 'CORXNULL'},
        { id: '7lv9NFUQpzzuVMseM2XP0p', name: 'Steveruu MAROS'},
    ]

    let getArtistListeners = (id) => {
        let url = `https://open.spotify.com/artist/${id}`;

        const fetcher = (...args) => fetch(...args).then(res => res.text());
        const { data, error } = useSWR(url, fetcher);
        if (error) return 'Failed to load';
        if (!data) return 'Loading...';
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let listeners = doc.querySelector('.artist-about-followers').textContent;
        return listeners;
    }

    for (const artist of artistList) {
       artist.listeners = getArtistListeners(artist.id);
       // 429 prevent
    break;
    }
      
  return (
    <>
        <h1>PHONK CZ/SK Monthly Listeners Table</h1>
        <ul className="list-group">
            {artistList.map((item) => <li key={item.id} className="list-group-item"><strong className=''>{item.name}: </strong><span>{item.listeners} listeners</span></li>)}
        </ul>
    </>
  );
}

export default ListGroup;
